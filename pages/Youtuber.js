import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
export default function Youtuber() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" >Meteor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link " href=".">Home     <i class="bi bi-house-heart"></i> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="about_us">About us   <i class="bi bi-file-earmark-person"></i></Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </a>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="song">Song   <i class="bi bi-file-music"></i></Link></li>
            <li><Link className="dropdown-item" href="Youtuber">Youtuber     <i class="bi bi-youtube"></i></Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='#Contact'>Contact      <i className="bi bi-telephone" /></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</header>


<main>
<div>
  <div className="container"> 
    <div className="row"> 
      <center><p /><h1><b>ใส่นัวแฟมมิลี่</b></h1><p /></center> 
      <p>&nbsp;&nbsp;&nbsp;</p>
      <div className="col-md-4 text-center mb-2">
        <img src="img/HRK.png" width={110} height={100} />
        <h3><b>HEARTROCKER</b></h3>
        <p><b>ผู้ติดตาม 7.91 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/MRHEARTROCKERz" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Pattiiz PTZ.png" width={110} height={100} />
        <h3><b>Patiiz PTZ</b></h3>
        <p><b>ผู้ติดตาม 3.73 แสน คน</b></p>
        <a href="https://www.youtube.com/c/patiiz0526/featured" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Zylnazter.png" width={110} height={100} />
        <h3><b>Zylnazter</b></h3>
        <p><b>ผู้ติดตาม 2.11 แสน คน</b></p>
        <a href="https://www.youtube.com/user/Zylnazter" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
    </div>
  </div>
  <br />
  <div className="container"> 
    <div className="row">
      <div className="col-md-4 text-center mb-2">
        <img src="img/SOM.png" width={110} height={100} />
        <h3><b>iamSometimes</b></h3>
        <p><b>ผู้ติดตาม 4.08 แสน คน</b></p>
        <a href="https://www.youtube.com/user/agiroszzz" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/KS139.png" width={110} height={100} />
        <h3><b>KS139</b></h3>
        <p><b>ผู้ติดตาม 9.78 หมื่น คน</b></p>
        <a href="https://www.youtube.com/user/MTSiegHeartChannel" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Prueni.png" width={110} height={100} />
        <h3><b>1000PRUENI</b></h3>
        <p><b>ผู้ติดตาม 1.18 แสน คน</b></p>
        <a href="https://www.youtube.com/channel/UCfJJiWAyBfNholUdz_Y4ZlA" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="container"> 
    <div className="row">
      <div className="col-md-4 text-center mb-2">
        <img src="img/Mr Yean.png" width={110} height={100} />
        <h3><b>Mr Yearn</b></h3>
        <p><b>ผู้ติดตาม 7.5 หมื่น คน</b></p>
        <a href="https://www.youtube.com/user/MryearnChannel" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Brownii.png" width={110} height={100} />
        <h3><b>BrOwnii3z</b></h3>
        <p><b>ผู้ติดตาม 1.1 แสน คน</b></p>
        <a href="https://www.youtube.com/user/illum1zoldic" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/CIG.png" width={110} height={100} />
        <h3><b>CigaretteS TV</b></h3>
        <p><b>ผู้ติดตาม 6 แสน คน</b></p>
        <a href="https://www.youtube.com/user/TheMyselfHello" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
    </div>
  </div>
</div>

</main>

<footer>
<section id="Contact" class="py-5"> 
            <div class="container">
                <footer class="py-3 my-4">
                  <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li class="nav-item"><Link href="." class="nav-link px-2 text-muted"><i class="bi bi-house-heart-fill"></i> <b>Home</b></Link></li>
                    <li class="nav-item"><a href="https://web.facebook.com/Teerapong2545" target="blank" class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i> <b>Facebook</b></a></li>
                    <li class="nav-item"><a href="https://www.instagram.com/n_foolmoon/" target="blank" class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i> <b>Instagram</b></a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted"><i class="bi bi-telephone"></i> <b>097-996-2835</b></a></li>
                  </ul>
                  <p class="text-center text-muted">&copy; <b>2022 Center Game Company, Inc</b></p>
                </footer>
              </div>
</section>
</footer>

    </>
  )
}
