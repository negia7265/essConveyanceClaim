import React from "react";
import { useState, useEffect } from "react";
import { Document, Page } from "react-pdf";
export default function Preview(props) {
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(1);
  const handleLoadPdf = (file) => {
    setPdfFile(URL.createObjectURL(file));
  };
  useEffect(() => {
    if (props.file) {
      handleLoadPdf(props.file);
    }
  }, [props.file]);
  const PrevStyle = {
    height: "400px",
    width: "350px",
    backgroundColor: "rgba(128, 128, 128, 0.4)",
    borderRadius: "7px",
  };
  return (
    <div style={{ width: "100%", display: "flex", marginLeft: "40vh" }}>
      <div>
        <div style={PrevStyle}>
          {pdfFile ? (
            <Document file={pdfFile}>
              <Page
                wrap={false}
                pageNumber={1}
                width={650}
                height={670}
                borderRadius={40}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          ) : (
            <p
              style={{
                backgroundColor: "rgba(128, 128, 128, 0.4)",
                textAlign: "center",
                fontSize: "30px",
                borderRadius: "3px",
              }}
            >
              No PDF selected
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
// export default function Preview = ({ file }) => {
//     const [pdfFile, setPdfFile] = useState(null);
//     const [numPages, setNumPages] = useState(1);
//     const handleLoadPdf = (file) => {
//       setPdfFile(URL.createObjectURL(file));
//     };
//     useEffect(() => {
//       if (file) {
//         handleLoadPdf(file);
//       }
//     }, [file]);
//     const PrevStyle = {
//       height: "400px",
//       width: "350px",
//       backgroundColor: "rgba(128, 128, 128, 0.4)",
//       borderRadius: "7px",
//     };
//     return (
//       <div style={PrevStyle}>
//         {pdfFile ? (
//           <Document file={pdfFile}>
//             <Page
//               wrap={false}
//               pageNumber={1}
//               width={350}
//               height={370}
//               borderRadius={40}
//               renderAnnotationLayer={false}
//               renderTextLayer={false}
//             />
//           </Document>
//         ) : (
//           <p
//             style={{
//               backgroundColor: "rgba(128, 128, 128, 0.4)",
//               textAlign: "center",
//               fontSize: "30px",
//               borderRadius: "3px",
//             }}
//           >
//             No PDF selected
//           </p>
//         )}
//       </div>
//     );
//   };
