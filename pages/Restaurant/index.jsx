import React, { useState } from "react";
import Header from "./containers/Header";
import Carrusel from "./containers/Carrusel";
import Nav from "./containers/Nav";
import Modal from "./components/Modal";
import Image from "next/image";
import Link from "next/link";
import Styles from "./styles/Styles.module.scss";

const modalProps = {
  return: "",
  isActive: true,
};

export default function Restaurant() {
  let [modal, setModal] = useState(modalProps);

  function openMenu(str) {
    if (str === "Lunch Menu") {
      setModal(
        (modal = {
          return: <Image src="https://i.postimg.cc/2j75GzKb/Lunch.png" width={500} height={750} alt="menu-img"/>,
          isActive: false,
        })
      );
    } else if (str === "Kids Menu") {
      setModal(
        (modal = {
          return: <Image src="https://i.postimg.cc/x85T1Rzy/kid.png" width={500} height={750} alt="menu-img"/>,
          isActive: false,
        })
      );
    } else if (str === "Night Menu") {
      setModal(
        (modal = {
          return: <Image src="https://i.postimg.cc/tCR4mLKr/night.png" width={500} height={750} alt="menu-img"/>,
          isActive: false,
        })
      );
    }
  }

  function closeModal() {
    setModal(
      (modal = {
        return: "",
        isActive: true,
      })
    );
  }

  return (
    <>
      <div className={Styles.restaurant}>
        <Header Styles={Styles} />
        <div className={Styles.container}>
          <div className={Styles.navCar}>
            <Nav
              buttons={[
                "Who we are?",
                "Our Vision",
                "Our Mision",
                "From where comes the components of that burger?",
              ]}
              openModal={openMenu}
              Styles={Styles}
            />
            <Carrusel Styles={Styles} />
            <Nav
              buttons={["Lunch Menu", "Kids Menu", "Night Menu"]}
              openMenu={openMenu}
              Styles={Styles}
            />
          </div>
        </div>
        <div className={Styles.foot}>
          <div className={Styles.leftside}>
            <p>
              <span>Opening Hours:</span>
              <br />
              <span>08:00 - 23:00</span>
            </p>
            <p>
              <span>Address:</span>
              <br />
              <span>Everlife Avenue, Springfield</span>
            </p>
            <p>
              <span>Telefone:</span>
              <br />
              <span>+01 123-4567890</span>
            </p>
          </div>
          <div className={Styles.center}>
            <p>
              <span>Enjoy the life eating!</span>
              <br />
            </p>
          </div>
          <div className={Styles.rigthside}>
            <p>Socials</p>
            <p>
              <Link href="/">Instagram</Link>
            </p>
            <p>
              <Link href="/">Facebook</Link>
            </p>
            <p>
              <Link href="/">TikTok</Link>
            </p>
          </div>
        </div>
      </div>
      <Modal Styles={Styles} modalProps={modal} closeModal={closeModal} />
    </>
  );
}
