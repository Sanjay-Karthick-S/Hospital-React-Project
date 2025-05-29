import React from 'react'
import "../../assets/styles/footer.scss"
const Footer = () => {
    const date = new Date();
    const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${
  String(date.getMonth() + 1).padStart(2, '0')}/${
  date.getFullYear()}`;
  return (
    <div className="bg-dark text-white footer-content" style={{position:"sticky",marginBottom:0,left:"10px",textAlign:"center"}}>
        <p>Page Maintained by</p>
        <p>Sanjay Karthick S</p>
        <p>Page Updated on 20 May </p>
        <p>Date:{formattedDate}</p>
    </div>
  )
}

export default Footer