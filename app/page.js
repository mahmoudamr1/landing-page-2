'use client'
import Image from 'next/image'
import { WiStars } from 'react-icons/wi';
import { useEffect, useState } from 'react';
import { PiShootingStarLight } from 'react-icons/pi';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { ImSpinner9 } from 'react-icons/im';
import Accordion from './According';
import CountdownTimer from './CountDown';


export default function Home() {



  const [loading, setLoading] = useState( false );
  const [formData, setFormData] = useState( {
    color: '',
    size: '',
    quantity: '',
    phone: '',
    address: '',
    additionalInfo: '',
  } );

  const handleChange = ( e ) => {
    const { name, value } = e.target;
    setFormData( {
      ...formData,
      [name]: value,
    } );
  };

  const handleSubmit = () => {
    setLoading( true ); 
    const formElement = document.getElementById( 'form' );
    const formData = new FormData( formElement );

    const xhr = new XMLHttpRequest();
    xhr.open( 'POST', formElement.action, true );

    xhr.onreadystatechange = function () {
      if ( xhr.readyState === XMLHttpRequest.DONE ) {
        if ( xhr.status === 200 ) {
        

          window.location.href = '/success';


        } else {
          alert( errorMessage ); 
        }
        setLoading( false );
      }
    };

    xhr.send( formData );
  };







  const accordionItems = [
    {
      title: 'Bu ürünün beden seçenekleri nelerdir?',
      content: 'Bu ürün XS, S, M, L ve XL olmak üzere beş farklı beden seçeneği sunmaktadır.',
    },
    {
      title: 'Bu ürünün malzemesi nedir?',
      content: 'Bu ürün %100 pamuk malzemeden üretilmiştir ve cildi tahriş etmemek için en kaliteli kumaşlar kullanılmıştır.',
    },
    {
      title: 'Bu eşofman takımının rengi nedir?',
      content: 'Kadın Barbie Baskılı Sweatshirt Eşofman Alt Üst Takım, canlı ve çekici bir pembe rengindedir.',
    },
    {
      title: 'Bu ürün ne tür bir baskıya sahip?',
      content: 'Bu ürün, popüler Barbie temasını yansıtan özel bir baskıya sahip.',
    },
    {
      title: 'Sweatshirt Eşofman Takımı nasıl temizlenir?',
      content: 'Bu ürün, kalitesini korumak için sadece soğuk suyla yıkanmalı ve düşük sıcaklıkta kurutulmalıdır.',
    },
   
  ];
















  useEffect( () => {


    // تخزين الدالة المستخدمة عند إضافة الحدث
    const handleScroll = () => {
      if ( window.pageYOffset > 100 ) {
        scrollToTopButton.style.display = "block";
      } else {
        scrollToTopButton.style.display = "none";
      }
    };

    // إضافة الحدث واستخدام الدالة المخزنة
    window.addEventListener( "scroll", handleScroll );
    var scrollToTopButton = document.getElementById( "scrollToTopButton" );

    scrollToTopButton.addEventListener( "click", function () {
      window.scrollTo( {
        top: 0,
        behavior: "smooth" // التمرير بشكل ناعم
      } );
    } );
    // تنظيف الحدث عند تفريغ المكون
    return () => {
      // إزالة الحدث باستخدام نفس الدالة المستخدمة
      window.removeEventListener( "scroll", handleScroll );
    };
  }, [] );
  

  return (
    <>
      <div class="whatsapp-button">
        <a href="https://wa.me/+905515882186" target="_blank">
          <Image
            src="/whatsapp1.png"
            alt="WhatsApp"
            width={ 100 }
            height={ 100 }
          />
        </a>
      </div>

      <button id="scrollToTopButton">
        <BsFillArrowUpCircleFill/>
      </button>

      <div className='main-container'>
        
        <div className='sec-1'>
          <h2>kadın Barbie Oversize Eşofman Takımı</h2>
          <h3>Sınırlı bir süre için, Kadın Barbie Spor Takımı koleksiyonunu yalnızca TRY249.00 dan başlayan <br/> fiyatlarla elde edebilirsiniz! Bu inanılmaz fiyatlarla harika bir görünüme sahip olma fırsatını kaçırmayın.</h3>
          <h4>Sezonun modasına katılın ve Kadın Barbie Spor Takımı koleksiyonu ile farkınızı ortaya koyun!</h4>
          <h5>Sezonun modasına katılın ve Kadın Barbie Spor Takımı koleksiyonu ile farkınızı ortaya koyun!</h5>
          <div className='go-buy-button'>
            <a href="#form">Sepete Ekle</a>
          </div>
        </div>

        
        <div className='div1-sec2 py-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 container content-center'>
          <div>
            <ul>
              <li><div><WiStars /></div> Bu ürün, Kadın Barbie Baskılı Sweatshirt Eşofman Alt-Üst Takımı adıyla tanımlanan, eğlenceli ve şık bir gardırop eklentisidir.</li>
              <li><div><WiStars /></div> Üst kısmı, Barbie logosuna sahip geniş bir baskıya sahip olan rahat bir sweatshirtten oluşmaktadır. Alt kısmında ise yumuşak ve esnek bir malzemeden yapılmış rahat bir eşofman bulunmaktadır.</li>
              <li><div><WiStars /></div> Hem sweatshirt, hem de eşofman, cildi tahriş etmeyen, nefes alabilen ve mükemmel bir şekilde oturan yüksek kaliteli bir kumaştan yapılmıştır.</li>
              <li><div><WiStars /></div> Bu set, hem iç mekanlarda rahatlıkla giyilebilir, hem de dışarı çıkarken mükemmel bir seçenek olabilir.</li>
              <li><div><WiStars /></div> Barbie baskısı, bu takımı benzersiz ve şık bir seçim haline getirir. Üstelik, geniş bir beden yelpazesinde mevcuttur, böylece herkes kendi mükemmel uyumunu bulabilir.</li>
              <li><div><WiStars /></div> Makinede yıkanabilir ve kolay bakım gerektirir.</li>
            </ul>
          </div>
          <div className='div2-sec2-image-container'><Image src="/img8.jpg" alt="" width={ 800 } height={ 1200 } /></div>
        </div>

        <div className='sec3 py-7'>
          <h2>Sınırlı bir süre için, Kadın Barbie Oversize Eşofman Takımı koleksiyonunu %40 İNDİRİM İLE edinin!</h2>
          <div className='go-buy-button'>
            <a href="#form">Sepete Ekle</a>
          </div>
</div>

        <div className='sec-4 container'>
          <div className="main-title">
            <h2>Main Features & Benefits</h2>
          </div>
        <div className='div2-description grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-5 gap-3'>
          <div>
            <h2>ÖZELLİKLER</h2>
            <ul>
              <li>Türkiyede üretildi.</li>
              <li>Siyah, Gri.</li>
              <li>%100 Pamuk.</li>
            </ul>
          </div>

          <div>
            <h2>KOLAY İADE</h2>
            <ul>
              <li>Değişim veya para iadesi için 15 gün içinde iade etmeniz yeterlidir.</li>
            </ul>
          </div>
          <div>
            <h2>kapıda ödeme</h2>
            <ul>
              <li>Tahmini işlem süresi: 1-3 iş günü</li>
            </ul>
          </div>

        </div>
        </div>

        <div className='sec-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-6'>

          <div className='div2-sec2-image-container'>
            <Image src="/img5.avif" alt="image"
              width={ 800 }
              height={ 1200 }
              quality={ 100 }
            />
          </div>

          <div className='div2-sec4'>

            <h2>Barbie Kadınlar için Giysiler: Moda ve Rahatlık</h2>
            <div className='flex gap-2'>
              <div className='svg-div2-sec4'><PiShootingStarLight /></div>
              <p>Moda dünyasında, Barbie kadınlar için giyim koleksiyonu, moda ve rahatlığı olağanüstü bir şekilde birleştiren bir seçenek olarak karşımıza çıkıyor. Bu giysiler, moda dünyasının en iyisini ve aynı zamanda rahatlığı deneyimleme fırsatı sunuyor.</p>
            </div>
            <div className='flex gap-2 pt-3'>
              <div className='svg-div2-sec4'><PiShootingStarLight /></div>
              <p>Bizimle Barbie Kadınlar için giysilerin şıklık ve rahatlıkla harmanlandığı yeni bir dünyayı keşfedin. Bu giysiler, çağdaş tasarımların ve özgünlüğün muhteşem bir karışımı ile sizin zarifliğinizi olağanüstü bir şekilde vurgulamaktadır.</p>
            </div>

          </div>

        </div>

        <div className='sec8'>
          <h2>Fırsatı kaçırma! Şimdi harika ürünümüzü özel indirimle alın.</h2>
          <CountdownTimer />
          <div className='go-buy-button'>
            <a href="#form">Sepete Ekle</a>
          </div>
        </div>
        
        <div className='sec-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  '>
          <div>
            <h2>Niçin büyük beden Barbie Kadınlar için Giysiler?</h2>
          

            <div className='div2-sec-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
              <div>
                <div>
                  <h3>Rahat Tasarım</h3>
                  <p>Bu ürün, gün boyu konfor ve rahatlık sağlamak için özenle tasarlanmıştır.</p>
                </div>
                <div>
                  <h3>Çekici Barbie Baskısı</h3>
                  <p>Canlı ve çarpıcı Barbie baskısı, bu takımı her yaş grubundan Barbie hayranları için mükemmel bir seçenek yapıyor.</p>
                </div>
                <div>
                  <h3>Mükemmel Uyum</h3>
                  <p>Farklı beden seçenekleri ile her vücut tipine uyum sağlar ve mükemmel bir uyum sunar.</p>
                </div>
              </div>

              <div>
                <div>
                  <h3>Kaliteli Malzeme</h3>
                  <p>Yüksek kaliteli kumaştan üretilmiştir, uzun süreli kullanımlarda bile şeklini korur.</p>
                </div>

                <div>
                  <h3>Esnekliği</h3>
                  <p>Eşofman alt üst takım, esnekliği sayesinde hareket özgürlüğü sağlar, her türlü aktivitede size eşlik eder.</p>
                </div>
              </div>
            </div>

          </div>

          <div>
            <video autoPlay muted loop>

              <source src="video1.mp4" type="video/mp4" />

            </video>
          </div>
        </div>




        <div className='sec7 container'>
          <div className="main-title">
            <h2>Sıkça sorulan sorular.</h2>
          </div>
          { accordionItems.map( ( item, index ) => (
            <Accordion key={ index } title={ item.title } content={ item.content } />
          ) ) }
        </div>


        
        <div className='sec-8 container'>


          <form
            method="POST"
            action="https://script.google.com/macros/s/AKfycbwT8hOPHlvL1jGClpNSQN850hX8BARiM_VwegMKjmURloJ9ZG_VSY6HmytGSvAvgFaQNA/exec"
            // action="https://script.google.com/macros/s/AKfycbyNQI42_-0f-Q6epW7Be5O6NV1g7bgOt6lBFj_PqDARTdqrDfAY2fC1EK-LDT3FiPy4Gw/exec"
            id="form"
          >
            <div>
              <label htmlFor="color">Renk:</label>
              <select
                id="color"
                name="color"
                onChange={ handleChange }
                value={ formData.color }
              >
                <option value="black" style={ { backgroundColor: 'black' } }>
                  Siyah
                </option>
                <option value="gray" style={ { backgroundColor: 'gray' } }>
                  Gri
                </option>
              </select>
            </div>
            <div>
              <label htmlFor="size">Beden:</label>
              <select
                id="size"
                name="size"
                onChange={ handleChange }
                value={ formData.size }
              >
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
                <option value="2xl">2XL</option>
                <option value="3xl">3XL</option>
              </select>
            </div>
            <div>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                placeholder="Miktar"
                onChange={ handleChange }
                value={ formData.quantity }
              />
            </div>
            <div>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Telefon Numarası"
                onChange={ handleChange }
                value={ formData.phone }
              />
            </div>
            <div>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Adres"
                onChange={ handleChange }
                value={ formData.address }
              />
            </div>
            <div>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                placeholder="Ek Bilgi"
                onChange={ handleChange }
                value={ formData.additionalInfo }
              ></textarea>
            </div>

            <div>
              <button type="button" onClick={ handleSubmit } id="submit" >
                Sepete Ekle
                { loading && (
                  <ImSpinner9 className="animate-spin ml-2" />
                ) }

              </button>
            </div>
          </form>







        </div>







    </div>
    </>
  )
}
