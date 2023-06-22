import React from 'react'

function Modal({premium,formData}) {
  return (
    
    <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
       <div className="modal-dialog modal-dialog-centered" role="document">
       <div className="modal-content">
       <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{formData.productName}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
       { premium?Object.keys(premium).map((key) => {
              return (
                <div className="mt-3 modal-body" key={key}>
                  {formData.productCode === "4" ? (
                    <p className="text-secondary">Premium</p>
                  ) : (
                    <p className="text-secondary">{key} YEAR</p>
                  )}

                  <p className="border_color">₹ {premium[key]}</p>
                </div>
              );
            }) :null}
            </div>
            </div>
    </div>
 
  )
}

export default Modal