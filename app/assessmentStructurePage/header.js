const HeaderPage = () => {
    return(
        <div className="header_box">
            <div className="header_content">
                <div className="pagination_logo_box">
                    <div className="logo_box">
                        <div className= "logos">
                        <img src="Logo Gr.png" alt="description"/>
                        </div>
                    </div>
                        <div className="pagination_box">
                            <div className="pagination">
                            <div className="left-arrow">&lt;</div>
                            <div className="pagination-row-1">1</div>
                            <div className="display_pagination">...</div>
                            <div className="pagination-row-2">2</div>
                            <div className="pagination-row-3">3</div>
                            <div className="pagination-row-4">4</div>
                            <div className="pagination-row-5">5</div>
                             <div className="display_pagination">...</div>
                            <div className="pagination-row-6">6</div>
                            <div className="pagination-row-7">7</div>
                            <div className="pagination-row-8">8</div>
                            <div className="right-arrow">&gt;</div>
                            
                        </div>
                    </div>
                </div>
                <button className="button">Submit</button>
          
            </div>
        </div>
    )
}
export default HeaderPage;


