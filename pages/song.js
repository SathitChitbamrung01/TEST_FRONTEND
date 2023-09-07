import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';

export default function song() {
  return (
    <>

    <Head><title>Meteor</title></Head>

<header>
<nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Meteor</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link " href=".">Home     <i class="bi bi-house-heart"></i> </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" a href="about_us">About us   <i class="bi bi-file-earmark-person"></i></Link>
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
      <center><p /><h1><b>Song</b></h1><p /></center> 
      <p>&nbsp;&nbsp;&nbsp;</p>
      <div className="col-md-4 text-center mb-2">
        <br />
        <img src="img/Song/たかやん  Takayan.png" width={110} height={100} />
        <h3><b>たかやん / Takayan </b></h3>
        <p><b>ผู้ติดตาม 1.71 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/MegaIgaguri" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <br />
        <img src="img/Song/Voccaloider.png" width={110} height={100} />
        <h3><b>Voccaloider</b></h3>
        <p><b>ผู้ติดตาม 1.94 แสน คน</b></p>
        <a href="https://www.youtube.com/c/Voccaloider" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <br />
        <img src="img/Song/ツユ.png" width={110} height={100} />
        <h3><b>ツユ</b></h3>
        <p><b>ผู้ติดตาม 1.04 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/EXSpins" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
    </div>
  </div>
  <br />
  <div className="container"> 
    <div className="row">
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/『ユイカ』.png" width={110} height={100} />
        <h3><b>『ユイカ』</b></h3>
        <p><b>ผู้ติดตาม 4.61 แสน คน</b></p>
        <a href="https://www.youtube.com/channel/UC2iRI4qf-H_BdpsS8mMEjZQ" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/まふまふちゃんねる.png" width={110} height={100} />
        <h3><b>まふまふちゃんねる</b></h3>
        <p><b>ผู้ติดตาม 3.48 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/uni_mafumafu" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/Sou.png" width={110} height={100} />
        <h3><b>Sou</b></h3>
        <p><b>ผู้ติดตาม 1.55 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/niconicoSou" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div className="container"> 
    <div className="row">
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/Skam  スゲーム.png" width={110} height={100} />
        <h3><b>Skam / スゲーム</b></h3>
        <p><b>ผู้ติดตาม 1.74 พัน คน</b></p>
        <a href="https://www.youtube.com/channel/UCG6yoQt9oj0kNl_YjA9nNKQ" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/シズクノメ.png" width={110} height={100} />
        <h3><b>シズクノメ</b></h3>
        <p><b>ผู้ติดตาม 3.69 แสน คน</b></p>
        <a href="https://www.youtube.com/channel/UCDhSzWsgbATga8wIwYCH2eA" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
      </div>
      <div className="col-md-4 text-center mb-2">
        <img src="img/Song/HoneyWorks OFFICIAL.png" width={110} height={100} />
        <h3><b>HoneyWorks OFFICIAL</b></h3>
        <p><b>ผู้ติดตาม 2.22 ล้าน คน</b></p>
        <a href="https://www.youtube.com/c/HoneyWorksOFFICIAL" target="blank"><h2><b><i class="bi bi-youtube"></i></b></h2></a>
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
