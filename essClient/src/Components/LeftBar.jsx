import React, { useState, useEffect } from "react";
import "./NavbarCSS.css";
// import { useNavigate } from 'react-router-dom';

import * as PDFJS from "pdfjs-dist";
PDFJS.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${PDFJS.version}/build/pdf.worker.min.js`;
import { useNavigate } from 'react-router-dom';
import ConveyanceForm from "../ConveyanceForm";

export default function LeftBar() {
    const navigate = useNavigate();

    const [pdf, setPdf] = React.useState("");
    const [imgList,setImgList] = React.useState([]);
    const [width, setWidth] = React.useState(0);
    const [images, setImages] = React.useState([]);
    const [height, setHeight] = React.useState(0);
    const [totalPages, setTotalPages] = React.useState(1);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [pdfRendering, setPdfRendering] = React.useState("");
    const [pageRendering, setPageRendering] = React.useState("");
    const [pdfName, setPdfName] = React.useState("No File Chosen");

    function leavedMouse(e) {
        const t = e.target.querySelector(':nth-child(2)')
        if (t !== null) t.style.display = "none";
        e.target.classList.remove('hovered');
    }
    function enteredMouse(e) {
        document.querySelectorAll('.value').forEach((el) => {
            el.classList.remove('hovered')
            el.querySelector(':nth-child(2)').style.display = "none";
        })
        const t = e.target.querySelector(':nth-child(2)')
        if (t !== null) t.style.display = "flex";
        e.target.classList.add('hovered');
    }

    function handleFormClicked() {
        document.querySelector('.form-area').style.display = 'flex';
        document.querySelector('.preview-area').style.display = 'none';
    }

    function choosePdf(e) {
        const file = e.target.files[0];
        setPdfName(file.name);
    }

    async function showPdf(event) {
        document.querySelector('.form-area').style.display = 'none';
        document.querySelector('.preview-area').style.display = 'flex';
        try {
            setPdfRendering(true);
            const fileEle = document.querySelector('#file-to-upload')
            if (!fileEle) return
            if(fileEle.files.length==0){
                setPdfName("Please Select a File")
                return
            }
            let file = fileEle.files[0];
            if(file.type=='application/pdf'){
                const uri = URL.createObjectURL(file);
                const _PDF_DOC = await PDFJS.getDocument({ url: uri }).promise;
                setPdf(_PDF_DOC);
                setTotalPages(_PDF_DOC.numPages);
                setPdfRendering(false);
                setCurrentPage(1);
                document.getElementById("file-to-upload").value = "";
            }
            else{
                setImages([]);
                for(let i=0;i<fileEle.files.length;i++){
                    let file=fileEle.files[i];
                    if(file.type!=='image/jpeg' && file.type!=='image/png'){
                        console.log("All selected files are not images")
                        return;
                    }
                    let fr = new FileReader();
                    fr.onload = function(e){
                        setImages(prevImages => [...prevImages, e.target.result]);
                    }
                    fr.readAsDataURL(file)
                }
            }
        } catch (error) {
            alert(error.message);
        }
    }

    function changePage(newPage) {
        setCurrentPage(newPage);
    }

    async function renderPage() {
        setPageRendering(true);
        const imagesList = [];
        const canvas = document.createElement("canvas");
        canvas.setAttribute("className", "canv");

        for (let i = 1; i <= pdf.numPages; i++) {
            var page = await pdf.getPage(i);
            var viewport = page.getViewport({ scale: 1 });
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            var render_context = {
                canvasContext: canvas.getContext("2d"),
                viewport: viewport
            };
            console.log("page length", pdf.numPages);
            setWidth(viewport.width);
            setHeight(viewport.height);
            await page.render(render_context).promise;
            let img = canvas.toDataURL("image/png");
            imagesList.push(img);
        }
        setImages(imagesList);
        setPageRendering(false);
    }

    useEffect(() => {
        pdf && renderPage();
        // eslint-disable-next-line
    }, [pdf, currentPage]);

    const styles = {
        wrapper: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "20%",
            marginBottom: "100px",
            paddingTop: "50px",
            gap: "5px"
        },
        imageWrapper: {
            border: "1px solid rgba(0,0,0,0.15)",
            borderRadius: "3px",
            boxShadow: "0 2px 5px 0 rgba(0,0,0,0.25)",
            padding: "0"
        }
    };


    // const [, setStyle] = useState({ display: "flex" });
    function leavedMouse(e) {
        const t = e.target.querySelector(':nth-child(2)')
        if (t !== null) t.style.display = "none";
        e.target.classList.remove('hovered');
    }
    function enteredMouse(e) {
        document.querySelectorAll('.value').forEach((el) => {
            el.classList.remove('hovered')
            el.querySelector(':nth-child(2)').style.display = "none";
        })
        const t = e.target.querySelector(':nth-child(2)')
        if (t !== null) t.style.display = "flex";
        e.target.classList.add('hovered');
    }
    return (
        <>
            <div className="LeftBar">
                <div className="data_fetch">
                    <div className="uploading">
                        <div class="upload-container" style={{ display: 'flex' }}>
                            <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} id="upload-button" onClick={() => document.getElementById("file-to-upload").click()} >
                                Upload File
                            </button>
                            <text style={{ marginBottom: '10px', display: 'flex', marginLeft: '10px', paddingTop: '15px', color: "grey" }}>{pdfName}</text>
                        </div>
                        <input
                            type="file"
                            id="file-to-upload"
                            accept="application/pdf,image/png,image/jpeg"
                            hidden
                            multiple="multiple"
                            onChange={choosePdf}
                        />
                        {/* <div class="container-upload">
                            <input type="file" id="file-to-uploadx" accept="application/pdf" onChange={showPdf} />
                        </div> */}
                        <button className="preview" onClick={showPdf}>Submit</button>
                        <div className="dispbtn">
                            <button className="preview" onClick={handleFormClicked}>Form</button>
                            <button className="preview" onClick={showPdf}>Preview</button>
                        </div>
                        <div className="scrollbox">
                            <div className="scrollbox-inner">
                                <div className="amount">
                                    <div className="head1">
                                        <span className="heading"> Date </span>
                                    </div>
                                    <span
                                        className="value"
                                        onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">15 August 2024</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">15 August 2024</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">15 August 2024</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">15 August 2024</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <button className="head">Enter Manually</button>
                                </div>
                                <div className="amount">
                                    <div className="head1">
                                        <span className="heading2">Distance Travelled</span>
                                    </div>

                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">90 km</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">90 km</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">90 km</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">90 km</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <button className="head">Enter Manually</button>
                                </div>
                                <div className="amount">
                                    <div className="head1">
                                        <span className="heading3">Pickup Address </span>
                                    </div>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <button className="head">Enter Manually</button>
                                </div>
                                <div className="amount">
                                    <div className="head1">
                                        <span className="heading2">Destination Address </span>
                                    </div>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10 ABC-Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <span
                                        className="value" onMouseEnter={(e) => enteredMouse(e)}
                                        onMouseLeave={(e) => leavedMouse(e)}
                                    >
                                        <div className="date_val">10-ABC Delhi</div>
                                        <div className="confirm" style={{ display: "none" }}>
                                            <button className="confirm-btn">Confirm</button>
                                        </div>
                                    </span>
                                    <button className="head">Enter Manually</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cbody">
                <div class="preview-area" id="image-convas-row" >
                    <div style={styles.wrapper}>
                        {images.map((image, idx) => (
                            <div key={idx} style={styles.imageWrapper}>
                                <img
                                    id="image-generated"
                                    src={image}
                                    alt="pdfImage"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        margin: "0",
                                        border: "none"
                                    }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div class="form-area" style={{ display: 'none' }}>
                    <ConveyanceForm />
                </div>
            </div>

        </>
    );
}