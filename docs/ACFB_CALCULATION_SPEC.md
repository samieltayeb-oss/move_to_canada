# Alberta Child and Family Benefit (ACFB) Calculation Specification

## 1. Executive Summary & Legal Framework
The Alberta Child and Family Benefit (ACFB) is a non-taxable, direct financial transfer funded by the Government of Alberta and administered on its behalf by the Canada Revenue Agency (CRA).

It consists of two distinct components:
1. **The Base Component:** Available to eligible families regardless of whether they have employment income.
2. **The Working Component:** Designed to incentive labour force participation, phasing in once working income exceeds $\$2,760$ CAD.

Payments are issued in four quarterly installments: **August, November, February, and May**.

---

## 2. 2026–2027 Benefit Year Thresholds & Maximums (Three-Children Family)

| Component | Maximum Annual (3 Children) | Phase-in Threshold | Phase-in Rate | Phaseout Threshold | Phaseout Rate |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Base Component** | $\$3,057.00$ CAD | $\$0$ | N/A | $\$27,024.00$ AFNI | $7.5\%$ (for 3+ kids) |
| **Working Component** | $\$1,920.00$ CAD | $\$2,760.00$ Working | $17.9\%$ | $\$45,285.00$ AFNI | $13.0\%$ (for 3+ kids) |
| **Combined Maximum** | **$\$4,977.00$ CAD** | — | — | — | — |

---

## 3. Mathematical Formulas

### Base Component Calculation
$$\text{Reduction}_{\text{Base}} = \max\left(0, (\text{AFNI} - \$27,024) \times 0.075\right)$$
$$\text{ACFB}_{\text{Base}} = \max\left(0, \$3,057 - \text{Reduction}_{\text{Base}}\right)$$

*Note:* If Adjusted Family Net Income (AFNI) exceeds approximately **$\$67,784$ CAD**, the Base Component phases out completely to $\$0$.

### Working Component Calculation
Phase-in:
$$\text{Gross Working Component} = \min\left(\$1,920, \max\left(0, (\text{Working Income} - \$2,760) \times 0.179\right)\right)$$

Phaseout:
$$\text{Reduction}_{\text{Working}} = \max\left(0, (\text{AFNI} - \$45,285) \times 0.130\right)$$
$$\text{ACFB}_{\text{Working}} = \max\left(0, \text{Gross Working Component} - \text{Reduction}_{\text{Working}}\right)$$

*Note:* The working component completely phases out when family net income exceeds approximately **$\$60,054$ CAD**.

---

## 4. Impact on Yassir's Household
* **During Initial Unemployed Transition Month:** If Canadian taxable net income is low during settlement, the family may qualify for the Base Component.
* **At Full Employment ($125,000 CAD salary):** Because Yassir's professional salary exceeds both the $\$67,784$ Base threshold and $\$60,054$ Working threshold, the annual ACFB entitlement reduces to **$\$0$ CAD**.
* **Financial Planning Takeaway:** Never budget the $\$4,977$ ACFB as permanent ongoing income once professional Canadian employment is achieved.
