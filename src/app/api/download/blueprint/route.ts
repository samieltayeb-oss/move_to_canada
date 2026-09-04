import { NextRequest, NextResponse } from 'next/server';
import { getPurchaseBySession, getEntitlement } from '@/lib/commerce/store';
import { COMMERCIAL_PLANS } from '@/config/plans';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'Missing session_id verification token.' },
        { status: 400 }
      );
    }

    // 1. Authoritative entitlement verification from durable store
    const purchase = await getPurchaseBySession(sessionId);
    if (!purchase || purchase.status !== 'PAID') {
      return NextResponse.json(
        {
          error: 'ACCESS_FORBIDDEN',
          message: 'Durable payment record not found or unpaid. Download authorization requires verified payment.'
        },
        { status: 403 }
      );
    }

    const entitlement = await getEntitlement(purchase.userId || purchase.customerEmail || sessionId);
    if (!entitlement) {
      return NextResponse.json(
        {
          error: 'ACCESS_FORBIDDEN',
          message: 'Active entitlement record not found. Payment reconciliation is pending.'
        },
        { status: 403 }
      );
    }

    const planId = purchase.planId || entitlement.planId || 'MOVE_PASS';
    const customerEmail = purchase.customerEmail || entitlement.customerEmail || 'customer@nexoramove.ca';
    const plan = COMMERCIAL_PLANS[planId as keyof typeof COMMERCIAL_PLANS] || COMMERCIAL_PLANS.MOVE_PASS;

    // 2. Generate Authoritative Relocation Dossier & Blueprint Digital Product
    const dossierPayload = {
      title: "NEXORA MOVE — Personalized Canadian Settlement Blueprint & Dossier",
      version: "2026.3-PROD",
      license: {
        purchaserEmail: customerEmail,
        plan: plan.displayName,
        stripeSessionId: sessionId,
        issuedAt: new Date().toISOString(),
        status: "ACTIVE_ENTITLED"
      },
      disclaimer: {
        legalNotice: "NEXORA Technologies Corp. is an independent software and research company providing analytical decision-support tools. NEXORA is NOT Immigration, Refugees and Citizenship Canada (IRCC), NOT affiliated with the Government of Canada, and NOT a licensed immigration consultant or legal practice. All benchmarks are informational modeling tools.",
        compliance: "Personal Information Protection and Electronic Documents Act (PIPEDA) Compliant"
      },
      settlementBlueprint: {
        targetCity: "Calgary, Alberta",
        provinceBenchmarks: {
          albertaPST: "0%",
          provincialTaxAdvantage: "Lowest combined top marginal rate in Canada",
          medianFamilyIncomeCAD: 104500,
          averageTwoBedRentCAD: 1950,
          averageFourBedDetachedRentCAD: 2950
        },
        financialLandingPlan: {
          recommendedLandingReserveCAD: 45600,
          monthlyComfortBudgetBreakdown: {
            rent: 2950,
            utilitiesENMAX: 480,
            halalGroceriesCostco: 1650,
            autoInsuranceNajmDiscounted: 358,
            transitOrAWDVehicle: 700,
            islamicAlternativeSchooling: 650,
            telecomRogers5G: 220,
            contingencyEmergency: 500
          },
          totalMonthlyBudgetEstimateCAD: 7508
        },
        seventyTwoHourArrivalRoadmap: [
          { hour: "0-4", task: "YYC International Airport arrival, study/work permit issuance at primary inspection kiosk, exchange currency." },
          { hour: "4-24", task: "Check-in to pre-arranged temporary furnished rental, obtain Canadian SIM card (eSIM via Rogers/Telus/Bell)." },
          { hour: "24-48", task: "Apply for Social Insurance Number (SIN) at Service Canada Harry Hays Building, Calgary Downtown." },
          { hour: "48-72", task: "Open Newcomer Bank Account at ATB Financial or Big 5 (RBC/TD/BMO) with $10,000+ wire transfer; receive debit cards." }
        ],
        canadianCreditBuildingStrategy: {
          month1To3: "Obtain secured newcomer Mastercard ($1,000 limit); use strictly for groceries; keep utilization below 28%.",
          month3To6: "Pay cell phone and home internet bills on time (reported directly to Equifax Canada).",
          month6To12: "Graduate to unsecured credit card; target credit score of 720+ for tier-1 vehicle financing and lease qualification."
        },
        jobSearchAtsChecklist: [
          "Format resume to single-column Canadian reverse-chronological standard (no photos, no marital status, no age).",
          "Highlight North American equivalents for Saudi/GCC professional certifications.",
          "Obtain World Education Services (WES) credential evaluation ECA report."
        ]
      }
    };

    return new NextResponse(JSON.stringify(dossierPayload, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Content-Disposition': `attachment; filename="NEXORA_MOVE_Relocation_Blueprint_${planId}.json"`,
        'Cache-Control': 'private, no-cache, no-store, must-revalidate'
      }
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Download fulfillment failure';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
