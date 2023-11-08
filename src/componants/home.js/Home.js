import React, { Fragment } from 'react';
import Header from './Header';
import './home.css'
import fatoch from './../../assets/fatoch.jpg'
import image1 from './../../assets/1.jpg'
import image2 from './../../assets/2.jpg'
import image3 from './../../assets/3.jpg'
import image4 from './../../assets/4.jpg'
import Data from './../../Data'
import {Carousel} from 'react-bootstrap'
import item11 from '../../assets/11.jpg'
import item12 from '../../assets/12.jpg'
import item13 from '../../assets/13.jpg'


const Home = () =>{
  const blogdata = Data.map((item)=>{
    return(
      <div className='col-md-3'>
      <div className='box'>
        <img src={item.img} />
         <h5>{item.title}</h5>
         <span>{item.time}</span>
       <h3>  {item.price}</h3>
      </div>
<button className='order-btn'>order now</button>
      </div>
    )
  })
  return (
  <Fragment>
<Header/>

      <section className='numbers'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-3'>
                <h2>1287+</h2>
                <h6>bahaa</h6>
              </div>
              <div className='col-md-3'>
                <h2>1552+</h2>
                <h6>video</h6>
              </div>
              <div className='col-md-3'>
                <h2>6589+</h2>
                <h6>eating</h6>
              </div>
              <div className='col-md-3'>
                <h2>1540+</h2>
                <h6>drinking</h6>
              </div>

            </div>
          </div>
      </section>
      <section className='pride'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
               <img src ={fatoch} title='fatoch'></img>
            </div>
            <div className='col-md-6'>
            <h2>what is fatoch ,and why it the famous eate in libanon?</h2>

              <h4>Fattoush consists of large pieces of squeezed cucumber and tomato from roasted vegetables, or a quantity of bread, necessarily tossed with olive oil and sumac. To give it a special kind.</h4>
              <button type='button'className='pride-btn'>learn more</button>

            </div>
          </div>
        </div>
      </section>
      <section className='list'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit.</h2>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, libero sunt? Explicabo repellat assumenda iste a eligendi, consequuntur maiores libero odio voluptates ipsam sunt nesciunt asperiores voluptatum et impedit? Excepturi voluptates, nostrum ratione sapiente architecto molestiae totam quisquam, soluta consequuntur vitae illo, voluptatem dolore? Perspiciatis ipsa ratione cum porro quam fugit fuga, quae adipisci eveniet sed, laudantium illo animi voluptatibus!.</h6>
              <ul>
                <li>etiam sed dolar ac diam volutpat</li>
                <li>etiam sed dolar ac diam volutpat</li>
                <li>etiam sed dolar ac diam volutpat</li>
              </ul>
              <button>click here </button>
            </div>
            <div className='col-md-6'>
              <div className='img1'>
              <img src ={image1} className='ph1' title=''></img>
              <img src ={image2} className='ph2' title='fatoch'></img>
              <img src ={image3} className='ph3' title='fatoch'></img>
              <img src ={image4} className='ph4' title='fatoch'></img>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='sok'>
        <div className='container'>
          <div className='row'>
          <div className='col-lg-12 col-md-12'>
            <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, repellendus.</h2>
             <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente nisi illo, autem minus beatae cum.</h6>

                <h4><a href='#'>watch a story</a></h4>
            </div>
          </div>
</div>
      </section>
      <section className='plog'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2 className='first-child'>explore our food</h2>
              <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut qui, magnam obcaecati consequuntur aliquam at.</h6>
            </div>
          </div>
          <div className='row' id='row-data'>
               {blogdata}
          </div>
        </div>
      </section>
      <section className='slider'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12 col-md-12'>

          <Carousel>
      <Carousel.Item>
       <img src={item11}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
<img src={item12}/>
  <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={item13}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
jgj ,,jjmb khkhj,hj ,kjljuo;uoj kp/m.jhj          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          </div>
               </div></div>
      </section>
      <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 col-md-12'>
              <h2>sehnaya /altazeem strrt/ infinity cafy</h2>
            </div>
          </div>
        </div>
      </section>
</Fragment>

  );
}

export default Home;
