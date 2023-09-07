import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script';
import Link from 'next/link';
import { useSession, signIn, signOut } from "next-auth/react"

export default function index() {
  return (
    <>
    <Head>
      <title>Home Comin</title>
    </Head>

    <div>
    <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand">Phoenix Next</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " href=".">Home     <i class="bi bi-house-heart"></i> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="about">About us   <i class="bi bi-file-earmark-person"></i></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="song">Song   <i class="bi bi-file-music"></i></Link></li>
            <li><Link className="dropdown-item" href="Youtuber">Youtuber     <i class="bi bi-person-square"></i></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='Contact'>Contact      <i className="bi bi-telephone" /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link href={'https://test-frontend-snowy-seven.vercel.app/dashboard/'} className="btn btn-outline-success" type="submit">login</Link>
      </form>
    </div>
  </div>
</nav>
</header>

    </div>

<main>
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={2000}>
      <img src="/slider(1).jpg" className="d-block w-100" alt="slider(1)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item" data-bs-interval={2000}>
      <img src="/slider(2).jpg" className="d-block w-100" alt="slider(2)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>

    <div className="carousel-item">
      <img src="/slider(3).jpg" className="d-block w-100" alt="slider(3)" />
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

<br/>

<div className="container marketing">
  <div className="row">
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='LOGO(1).png'></img>
      <h2 className="fw-normal">Phoenix Next</h2>
      <p><Link className="btn btn-secondary" href="https://www.phoenixnext.com/">View details »</Link></p>
    </div>
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='LOGO(2).png'></img>      
      <h2 className="fw-normal">Luckpim</h2>
      <p><Link className="btn btn-secondary" href="https://www.facebook.com/Luckpim/?locale=th_TH/">View details »</Link></p>
    </div>
    <div className="col-lg-4">
      <img className='bd-placeholder-img rounded-circle' width={140} height={140} src='LOGO(3).png'></img>  
      <h2 className="fw-normal">first page pro</h2>
      <p><Link className="btn btn-secondary" href="http://www.firstpagepro.com/">View details »</Link></p>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">Phoenix Next<span className="text-body-secondary"></span></h2>
      <p className="lead">กลับมาเจออีกครั้งกับกิจกรรมประจำเดือน เตรียมพบกับลิขสิทธิ์ใหม่จากสำนักพิมพ์ phoenix ประจำเดือนกรกฎาคม 2023 ตั้งแต่วันพรุ่งนี้เป็นต้นไปจ้า</p>
    </div>
    <div className="col-md-5">
      <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='Book(1).jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading fw-normal lh-1">Luckpim<span className="text-body-secondary"></span></h2>
      <p className="lead">ประกาศเติมสต็อกวันนี้ </p>
      <p className='lead'>" วัดป่วนชวนมารัก" เล่ม 1-4 วางจำหน่ายแล้ววันนี้บนร้านค้าออนไลน์และร้านหนังสือทั่วไป</p>
    </div>
    <div className="col-md-5 order-md-1">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='Book(2).jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading fw-normal lh-1">first page pro<span className="text-body-secondary">.</span></h2>
      <p className="lead">📣📣📣 สินค้าออกใหม่ประจำสัปดาห์ 📣📣📣</p>
      <p className="lead">เอฟจังเอาความนุ่มฟูมาเสิร์ฟทุกคนแล้วค่า</p>
      <p className="lead">🌠 การ์ตูน คุณพนักงานคะ รับน้องผีไปช่วยเยียวยาไหมคะ เล่ม 3</p>
      <p className="lead">💵 เล่มละ 120 บาท </p>
    </div>
    <div className="col-md-5">
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width={500} height={500} src='Book(3).jpg'></img>
    </div>
  </div>
  <hr className="featurette-divider" />
</div>
</main>

<footer className="container">
<div>
  <div className="b-example-divider" />
  <div className="container">
    <footer className="py-5">
      <div className="row">
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 mb-3">
          <h5>Section</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>
        <div className="col-md-5 offset-md-1 mb-3">
          <form>
            <h5>Subscribe to our newsletter</h5>
            <p>Monthly digest of what's new and exciting from us.</p>
            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
              <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
              <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
              <button className="btn btn-primary" type="button">Subscribe</button>
            </div>
          </form>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
        <p>© 2023 Company, Inc. All rights reserved.</p>
        <ul className="list-unstyled d-flex">
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#twitter" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#instagram" /></svg></a></li>
          <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width={24} height={24}><use xlinkHref="#facebook" /></svg></a></li>
        </ul>
      </div>
    </footer>
  </div>
</div>

</footer>
    </>
  )
}