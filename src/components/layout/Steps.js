import React from 'react';



const data = [
    {
        id:1,
        title:"Complete booking form",
        img:"assets/steps/form.jpg"
    },
    {
        id:2,
        title:"Receive appointment details",
        img:"assets/steps/appointment.jpg"
    },
    {
        id:3,
        title:"Have your scan",
        img:"assets/steps/scan.jpg"
    },
    {
        id:4,
        title:"Get your results",
        img:"assets/steps/resualt.jpg"
    },
]

const Steps = () => {
  return (
  <div className='my-5 bg-light my-5'>
    <div className='container py-5'>
        <div className='row'>
            <h3 className='text-center'>Get screened and referred in 7 days</h3>
            <p className='w-50 text-center mx-auto'>
                Having the right analysis speeds up admittance to the right treatment or can put your psyche very stil. Regardless, an early analysis consistently implies a superior visualization.</p>
        </div>
        <div className='row'>
            {
                data.map(({id, img, title})=>{
                    return(
                            <div className="col-md-3 col-sm-6 mb-3">
                                <div className="card-body">
                                    <div className='rounded-circle text-white mx-auto text-center' style={{backgroundColor:"#059A98",width:"30px", height:"30px", lineHeight:"30px"}} >{id}</div>
                                    <h5 className="card-title text-center text-dark my-2">{title}</h5>
                                    <img src={img} className="card-img-top" alt={title} />
                                </div>
                            </div>
                    )
                })
            }
        </div>
    </div>
  </div>);
};

export default Steps;
