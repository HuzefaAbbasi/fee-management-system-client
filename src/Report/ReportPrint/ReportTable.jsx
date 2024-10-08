import React from "react";
import "./printTable.css";

const ReportTable = React.forwardRef((props, ref) => (
  <div ref={ref} className="print-div">
    <h1 className="print-heading">Classified Register</h1>

    {/* First half of the columns */}
    <table className="table">
      <thead>
        <tr>
          <th>Challan No</th>
          <th>Name</th>
          <th>D/O</th>
          <th>Roll No</th>
          <th>Class</th>
          <th>Dated</th>
          <th>Admission Fee</th>
          <th>Tuition Fee</th>
          <th>Total</th>
          <th>General Fund</th>
          <th>Student I.D Card Fund</th>
          <th>Red Cross Fund</th>
          <th>Medical Fee</th>
          <th>Student Welfare Fund</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((challan, index) => (
          <tr key={index}>
            <td>{challan.challanNo}</td>
            <td>{challan.studentId.name}</td>
            <td>{challan.studentId.fatherName}</td>
            <td>{challan.studentId.rollNo}</td>
            <td>{challan.studentId.class}</td>
            <td>{new Date(challan.updatedAt).toLocaleDateString()}</td>
            <td>{challan.admissionFee}</td>
            <td>{challan.tuitionFee}</td>
            <td>{(challan.admissionFee || 0) + (challan.tuitionFee || 0)}</td>
            <td>{challan.generalFund}</td>
            <td>{challan.studentIdCardFund}</td>
            <td>{challan.redCrossFund}</td>
            <td>{challan.medicalFee}</td>
            <td>{challan.studentWelfareFund}</td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* First footer */}
    <div className="footer">Page 1 Footer - Classified Register</div>

    {/* CSS to force page break after this table */}
    <div className="page-break"></div>

    {/* Second half of the columns */}
    <table className="table">
      <thead>
        <tr>
          <th>Sc. Breakage Fund</th>
          <th>Magazine Fund</th>
          <th>Library Sec Fund</th>
          <th>Board/Univ Regd/Exam Dues</th>
          <th>Sports Fund</th>
          <th>Miscellaneous Fund</th>
          <th>Board Uni Processing Fee</th>
          <th>Transport Fund</th>
          <th>Burqa Fund</th>
          <th>College Examination Fund</th>
          <th>Computer Fee</th>
          <th>2nd Shift</th>
          <th>Fine Funds</th>
          <th>Total</th>
          <th>Grand Total</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((challan, index) => (
          <tr key={index}>
            <td>{challan.scBreakageFund}</td>
            <td>{challan.magazineFund}</td>
            <td>{challan.librarySecFund}</td>
            <td>{challan.boardUnivRegExamDues}</td>
            <td>{challan.sportsFund}</td>
            <td>{challan.miscellaneousFund}</td>
            <td>{challan.boardUniProcessingFee}</td>
            <td>{challan.transportFund}</td>
            <td>{challan.burqaFund}</td>
            <td>{challan.collegeExaminationFund}</td>
            <td>{challan.computerFee}</td>
            <td>{challan.secondShift}</td>
            <td>{challan.fineFunds}</td>
            <td>
              {(challan.generalFund || 0) +
                (challan.studentIdCardFund || 0) +
                (challan.redCrossFund || 0) +
                (challan.medicalFee || 0) +
                (challan.studentWelfareFund || 0) +
                (challan.scBreakageFund || 0) +
                (challan.magazineFund || 0) +
                (challan.librarySecFund || 0) +
                (challan.boardUnivRegExamDues || 0) +
                (challan.sportsFund || 0) +
                (challan.miscellaneousFund || 0) +
                (challan.boardUniProcessingFee || 0) +
                (challan.transportFund || 0) +
                (challan.burqaFund || 0) +
                (challan.collegeExaminationFund || 0) +
                (challan.computerFee || 0) +
                (challan.secondShift || 0) +
                (challan.fineFunds || 0)}
            </td>
            <td>
              {(challan.admissionFee || 0) +
                (challan.tuitionFee || 0) +
                (challan.generalFund || 0) +
                (challan.studentIdCardFund || 0) +
                (challan.redCrossFund || 0) +
                (challan.medicalFee || 0) +
                (challan.studentWelfareFund || 0) +
                (challan.scBreakageFund || 0) +
                (challan.magazineFund || 0) +
                (challan.librarySecFund || 0) +
                (challan.boardUnivRegExamDues || 0) +
                (challan.sportsFund || 0) +
                (challan.miscellaneousFund || 0) +
                (challan.boardUniProcessingFee || 0) +
                (challan.transportFund || 0) +
                (challan.burqaFund || 0) +
                (challan.collegeExaminationFund || 0) +
                (challan.computerFee || 0) +
                (challan.secondShift || 0) +
                (challan.fineFunds || 0)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>

    {/* Second footer */}
    <div className="footer">Page 2 Footer - Classified Register</div>
  </div>
));

export default ReportTable;
