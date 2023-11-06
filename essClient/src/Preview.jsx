// import React from "react";
// import { useState, useEffect } from "react";
// import { Document, Page } from "react-pdf";
// export default function Preview(props) {
//   const [pdfFile, setPdfFile] = useState(null);
//   const [numPages, setNumPages] = useState(1);
//   const handleLoadPdf = (file) => {
//     setPdfFile(URL.createObjectURL(file));
//   };
//   useEffect(() => {
//     if (props.file) {
//       handleLoadPdf(props.file);
//     }
//   }, [props.file]);
//   const PrevStyle = {
//     height: "400px",
//     width: "350px",
//     backgroundColor: "rgba(128, 128, 128, 0.4)",
//     borderRadius: "7px",
//   };
//   return (
//     <div style={{ width: "100%", display: "flex", marginLeft: "40vh" }}>
//       <div>
//         <div style={PrevStyle}>
//           {pdfFile ? (
//             <Document file={pdfFile}>
//               <Page
//                 wrap={false}
//                 pageNumber={1}
//                 width={650}
//                 height={670}
//                 borderRadius={40}
//                 renderAnnotationLayer={false}
//                 renderTextLayer={false}
//               />
//             </Document>
//           ) : (
//             <p
//               style={{
//                 backgroundColor: "rgba(128, 128, 128, 0.4)",
//                 textAlign: "center",
//                 fontSize: "30px",
//                 borderRadius: "3px",
//               }}
//             >
//               No PDF selected
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from 'react';    /* last updated code*/
import { Document, Page } from 'react-pdf';

export default function Preview(props) {
  const [pdfFile, setPdfFile] = useState(null);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const handleLoadPdf = (file) => {
    setPdfFile(URL.createObjectURL(file));
  };

  useEffect(() => {
    if (props.file) {
      handleLoadPdf(props.file);
    }
  }, [props.file]);

  const PrevStyle = {
    height: '400px',
    width: '350px',
    backgroundColor: 'rgba(128, 128, 128, 0.4)',
    borderRadius: '7px',
    //position: 'relative',
    flex: 1,
  };

  const buttonStyle = {
     fontSize: '35px',
    letterSpacing: '5px',
  };
  const parentStyle={ 
    display: 'flex', 
    justifyContent: 'center',
    width:'65%',
    hegiht:'600px',
    flexDirection: 'column',
    alignItems: 'center',
  }
  const pageControlsStyle = {
    position: 'absolute',
    bottom: '-100px', // Adjust as needed to control the vertical position
    left: '100px',
    width: '100%',
    //display: 'flex',
    //flex: 1,
     justifyContent: 'center',
    textAlign: 'center',
  };

  const goToPreviousPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const goToNextPage = () => {
    if (pageNumber < numPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div style={parentStyle}>
      <div>
        <div style={PrevStyle}>
          {pdfFile ? (
            <Document file={pdfFile} onLoadSuccess={onDocumentLoadSuccess} style={{display: 'flex'}}>
              <Page
                //wrap={false}
                style={{display: 'flex'}}
                pageNumber={pageNumber}
                width={650}
                height={670}
                marginLeft={500}
                borderRadius={40}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          ) : (
            <p
              style={{
                backgroundColor: 'rgba(128, 128, 128, 0.4)',
                textAlign: 'center',
                fontSize: '30px',
                borderRadius: '3px',
              }}
            >
              No PDF selected
            </p>
          )}
        </div>
        <div style={pageControlsStyle}>
          <button
            style={buttonStyle}
            disabled={pageNumber <= 1}
            onClick={goToPreviousPage}
            type="button"
            aria-label="Previous page"
          >
            ‹
          </button>
          <span>
            {pageNumber} of {numPages}
          </span>
          <button
            style={buttonStyle}
            disabled={pageNumber >= numPages}
            onClick={goToNextPage}
            type="button"
            aria-label="Next page"
          >
            ›
          </button>
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

