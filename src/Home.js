import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {

    return (
        <div className="home">
            <div className="home__container">
                <img 
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>            
                <div className="home__row">
           
                <Product 
                        id= {543611352}
                        title='The Lean Startup'
                        price='29.99'
                        image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                        rating ={5}
                />
                    
                <Product 
                        id= {543611353}
                        title='The Lean Startup'
                        price='19.99'
                        image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                        rating ={5}
                />
            
                </div>
                <div className="home__row">
                <Product 
                        id= {543611354}
                        title='The Lean Startup'
                        price='69.99'
                        image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                        rating ={5}
                    />                    <Product 
                    id= {543611355}
                    title='The Lean Startup'
                    price='29.99'
                    image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                    rating ={5}
                />                    <Product 
                id= {543611356}
                title='The Lean Startup'
                price='29.99'
                image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                rating ={5}
                />
                </div>
                <div className="home__row">
                <Product 
                        id= {543611357}
                        title='The Lean Startup'
                        price='29.99'
                        image='https://images-na.ssl-images-amazon.com/images/I/81jgCiNJPUL.jpg'
                        rating ={5}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home
