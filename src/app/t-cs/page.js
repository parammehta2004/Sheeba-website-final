"use client";
import React from "react";
import Navigation from "@/components/layout/Navigation";

export default function TCs() {
  return (
    <main style={{ backgroundColor: "#f8f1de", minHeight: "100vh", paddingBottom: "6rem" }}>
      <Navigation />
      <section style={{ padding: "10rem 2rem 4rem", maxWidth: "800px", margin: "0 auto", textAlign: "left", color: "var(--foreground)" }}>
        <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "48px", marginBottom: "1rem" }}>
          Terms & Conditions
        </h1>
        <div style={{ fontSize: "16px", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p>
            <strong>Company:</strong> Sheeba The Nutritionist Pte Ltd<br />
            <strong>Company No.:</strong> 201804445C<br />
            <strong>Registered Address:</strong> 229 Mountbatten Road, Mountbatten Square #03-38, Singapore 398007
          </p>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>1. Interpretation / Definitions</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Business Day:</strong> a day other than a Saturday, Sunday or public holiday when banks in Singapore are open.</li>
            <li><strong>Commencement Date:</strong> has the meaning given in Clause 2.1.</li>
            <li><strong>Conditions:</strong> these terms and conditions as amended from time to time.</li>
            <li><strong>Contract:</strong> the contract between the Supplier and the Customer for the supply of Goods and/or Services in accordance with these Conditions, further described at Clause 2.1.</li>
            <li><strong>Customer:</strong> the person or firm who purchases the Goods and/or Services from the Supplier.</li>
            <li><strong>Deliverables:</strong> the outputs of the Services to be provided by the Supplier to the Customer as set out in the Order or Service Specification.</li>
            <li><strong>Goods:</strong> the goods set out in the Order.</li>
            <li><strong>Goods Specification:</strong> any specification for the Goods detailed in an Order.</li>
            <li><strong>Intellectual Property Rights:</strong> patents, rights to inventions, copyright, trademarks, service marks, trade names, business names, domain names, rights in get-up, goodwill and the right to sue for passing off or unfair competition, rights in designs, rights in computer software, database rights, rights to preserve the confidentiality of information (including know-how and trade secrets), and any other intellectual property rights (whether registered or unregistered), including all applications and rights to apply for and be granted, renewals or extensions of, and rights to claim priority from, such rights.</li>
            <li><strong>Order:</strong> the Customer's order for the supply of Goods and/or Services.</li>
            <li><strong>Services:</strong> the services, including any Deliverables, to be provided by the Supplier.</li>
            <li><strong>Supplier:</strong> Sheeba The Nutritionist Pte Ltd (Company No. 201804445C).</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>2. Basis of Contract</h2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>These Conditions together with the Order constitutes the Contract between the Customer and the Supplier, which Contract shall come into existence on the date of the Order (Commencement Date).</li>
            <li>The Order shall only be deemed to be accepted when the Supplier issues written acceptance of the Order at which point and on which date the Contract shall come into existence.</li>
            <li>Any samples, drawings, descriptive matter or advertising issued by the Supplier and any descriptions of the Goods or the Services (or illustrations or descriptive matter contained in the Supplier's catalogues or brochures) are issued or published for the sole purpose of giving an approximate idea of the Services and/or Goods described in them. They shall not form part of the Contract or have any contractual force.</li>
            <li>These Conditions apply to the Contract to the exclusion of any other terms that the Customer seeks to impose or incorporate, or which are implied by trade, custom, practice or course of dealing.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>3. Supply of Goods</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>The Supplier shall deliver the Goods in accordance with the Goods Specification.</li>
            <li>The Supplier reserves the right to amend the Goods Specification if required by any applicable statutory or regulatory requirement, and shall notify the Customer in any such event.</li>
            <li>The Supplier may deliver the Goods in instalments. Any delay in delivery or defect in an instalment shall not entitle the Customer to cancel any other instalment.</li>
            <li>Title and risk in the Goods shall pass to the Customer upon completion of delivery, provided that the Supplier has received payment in full (in cash or cleared funds) for the Goods.</li>
            <li>If the Customer fails to take delivery of Goods, the Supplier may, after giving ten (10) Business Days' notice, resell or otherwise dispose of the Goods and charge the Customer for any shortfall below the price of the Goods.</li>
            <li>If the Customer returns Goods to the Supplier, the Customer shall do so at its own cost to the Supplier's place of business.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>4. Supply of Services</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>The Supplier shall supply the Services to the Customer in accordance with the Service Specification in all material respects.</li>
            <li>The Supplier shall use all reasonable endeavours to meet any performance dates for the Services, but any such dates shall be estimates only and time shall not be of the essence for the performance of the Services.</li>
            <li>The Supplier reserves the right to amend the Service Specification if necessary to comply with any applicable law or regulatory requirement, or if the amendment will not materially affect the nature or quality of the Services, and the Supplier shall notify the Customer in any such event.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>5. Price and Payment</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>The Customer agrees to immediately remit payment of any fees to the Supplier upon presentation of any Supplier invoice.</li>
            <li>Without prejudice to any other rights the Supplier may have, the Supplier reserves the right to: suspend or terminate the Contract or withhold any Good, Services or any Deliverables if any such invoice remains unpaid for a period of thirty (30) days from the date of the invoice.</li>
            <li>The Supplier reserves the right to recover from the Customer the amount of all costs and expenses, including attorney's fees, incurred by the Supplier in connection with the enforcement of its rights under this Clause.</li>
            <li>Unless otherwise stated in any applicable Order, all fees charged by the Supplier are net of any applicable withholding taxes, customs, levies, excise taxes (including without limitation value added tax, goods and services tax, use tax and sales tax), deductions or other similar charges imposed by any jurisdiction or government on the Supplier or on the Goods/Services.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>6. Intellectual Property Rights</h2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>All Intellectual Property Rights in or arising out of or in connection with the Services (other than Intellectual Property Rights in any materials provided by the Customer) shall be owned by the Supplier.</li>
            <li>The Supplier grants to the Customer a fully paid-up, worldwide, non-exclusive, royalty-free licence during the term of the Contract to use the Deliverables (excluding materials provided by the Customer) for the purpose of receiving and using the Services and the Deliverables.</li>
            <li>The Customer shall not sub-license, assign or transfer the rights granted by this Clause.</li>
            <li>The Customer grants the Supplier a fully paid-up, non-exclusive, royalty-free non-transferable licence to copy and modify any materials provided by the Customer to the Supplier for the purpose of providing the Services to the Customer.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>7. Data Protection</h2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>All Personal Data (as defined in the Data Protection Legislation) that is collected by the Supplier from a Customer will be processed in accordance with the Supplier's Privacy Policy, which is incorporated into this Contract by this reference.</li>
            <li>By purchasing and/or using the Goods and/or Services, the Customer acknowledges that they are providing their consent to their personal data being used and processed in accordance with the Privacy Policy.</li>
            <li>The Customer agrees to ensure that it has and/or will provide all necessary consents and notices to enable lawful transfer of his/her Personal Data to the Supplier for the duration and purposes of the Contract.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>8. Disclaimer of Warranties</h2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>PLEASE NOTE THE FOLLOWING IMPORTANT DISCLAIMERS OF WARRANTIES:</li>
            <li>THE PRODUCTS, OFFERING, CONTENT, GOODS, MATERIALS AND SERVICES ARE PROVIDED BY THE SUPPLIER TO THE CUSTOMER "AS IS" AND WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</li>
            <li>THE SUPPLIER HEREBY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, SATISFACTORY QUALITY, FITNESS FOR A PARTICULAR PURPOSE, COMPATIBILITY, SECURITY OR ACCURACY.</li>
            <li>THE SUPPLIER'S PRODUCTS, OFFERING, CONTENT, GOODS, MATERIALS AND SERVICES ARE INTENDED ONLY TO ASSIST CUSTOMERS IN THEIR PERSONAL HEALTH AND WELLBEING EFFORTS. THE INFORMATION AND REPORTS GENERATED BY THE SUPPLIER SHOULD NOT BE INTERPRETED AS A SUBSTITUTE FOR DOCTOR OR SPECIALIST CONSULTATION, EVALUATION, OR TREATMENT.</li>
            <li>CUSTOMERS ARE URGED AND ADVISED TO SEEK THE ADVICE OF A DOCTOR BEFORE BEGINNING ANY HEALTH OR DIETARY EFFORT OR REGIMEN. THE SUPPLIER'S PRODUCTS, OFFERING, CONTENT, GOODS, MATERIALS AND SERVICES ARE INTENDED FOR USE ONLY BY HEALTHY ADULT INDIVIDUALS AND ARE NOT INTENDED FOR USE BY MINORS, PREGNANT WOMEN, OR INDIVIDUALS WITH ANY TYPE OF HEALTH CONDITION.</li>
          </ol>
          <p>
            The Supplier is not a medical organization and its staff cannot provide medical advice or diagnosis. Nothing in the Supplier's products, offerings, content, goods, materials and services should be construed as medical advice or diagnosis.
          </p>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>9. Limitation of Liability</h2>
          <p>PLEASE NOTE THE FOLLOWING IMPORTANT LIMITATION:</p>
          <p>THE CUSTOMER HEREBY EXPRESSLY UNDERSTANDS AND AGREES THAT:</p>
          <p>
            THE SUPPLIER AND ITS AFFILIATES SHALL NOT BE LIABLE TO THE CUSTOMER FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY OR PUNITIVE DAMAGES, OR ANY OTHER DAMAGES WHATSOEVER, INCLUDING BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA OR OTHER INTANGIBLE LOSSES (EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES), HOWSOEVER OCCURING.
          </p>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>If the Supplier fails to deliver the Goods, its liability shall be limited to the costs and expenses incurred by the Customer in obtaining replacement goods of similar description and quality in the cheapest market available, less the price of the Goods.</li>
            <li>The Supplier shall not be liable for any costs or losses sustained or incurred by the Customer arising directly or indirectly from the Supplier's failure or delay to perform any of the Supplier's obligations set out in the Contract.</li>
            <li>These exclusions of liability apply to the fullest extent permitted by law and survive the termination of the Contract.</li>
          </ul>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>10. Termination</h2>
          <ol style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li>Without affecting any other right or remedy available to it, either party may terminate the Contract by giving the other party not less than ten (10) Business Days' written notice.</li>
            <li>Without affecting any other right or remedy available to it, either party may terminate the Contract with immediate effect by giving written notice to the other party if the other party commits a material breach of its obligations under the Contract and (if such breach is remediable) fails to remedy that breach within ten (10) Business Days after receipt of notice to do so.</li>
            <li>Without affecting any other right or remedy available to it, the Supplier may terminate or suspend (at its discretion) the Contract with immediate effect by giving written notice to the Customer if the Customer fails to pay any amount due under the Contract on the due date for payment.</li>
          </ol>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", marginTop: "2rem", color: "var(--accent-teal-dark)" }}>11. General</h2>
          <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <li><strong>Variation:</strong> Any variation of the Contract shall be in writing and signed by the parties.</li>
            <li><strong>Waiver:</strong> No failure or delay by a party to exercise any right or remedy provided under the Contract or by law shall constitute a waiver of that or any other right or remedy.</li>
            <li><strong>Entire Agreement:</strong> The Contract constitutes the whole agreement between the parties and supersedes any previous arrangement, understanding or agreement between them relating to the subject matter they cover.</li>
          </ul>

        </div>
      </section>
    </main>
  );
}
