"use client"
import styles from './page.module.css'
import Image from 'next/image'

export default function apiEdit() {
  return (
    <main className={styles.main}>
        <div className={styles.coverPhoto}>
        <input className={styles.addCover} type="file" accept='image/*'/>
        </div>
        <div className={styles.profileContainer}>
            <div className={styles.profilePhoto}>
            <Image
                src="/ApiProfile.svg"
                alt="Beekeeper icon"
                width={206}
                height={206}
                priority
                className={styles.BeekeeperProfile}
            />
            </div>
            <div className={styles.profileDetails}>
                <div>
                    <p className={styles.nameProfile}>Nome do apicultor</p>
                    <p className={styles.localProfile}>Localização do apicultor</p>
                </div>
                <>
                <Image
                        src="/editInfo.svg"
                        alt="Beekeeper icon"
                        width={20}
                        height={20}
                        priority
                        className={styles.editInfo}
                    />
                </>
            </div>
        </div>
        <div className={styles.descContainer}>
            <div className={styles.headerDesc}>
                <label htmlFor="descArea" className={styles.titleDesc}> Descrição </label>
                
                <Image
                    src="/editDesc.svg"
                    alt="Beekeeper icon"
                    width={30}
                    height={30}
                    priority
                    className={styles.editDesc}
                />
            </div>

            <textarea id='descArea' className={styles.descArea}></textarea>
            
            <div className={styles.footerDesc}>
            <Image
                    src="/confirmDesc.svg"
                    alt="Beekeeper icon"
                    width={30}
                    height={30}
                    priority
                    className={styles.confirmDesc}
                />
            </div>
        </div>
        <div className={styles.galleryContainer}>
            <h1 className={styles.titleGallery}>GALERIA</h1>

            <div className={styles.carouselPhotos}>
            <Image
                    src="/arrowLeft.svg"
                    alt="Beekeeper icon"
                    width={35}
                    height={35}
                    priority
                    className={styles.arrowGallery}
                />
                <div className={styles.photoGallery}>
                <Image
                    src="/uploudIcon.svg"
                    alt="Beekeeper icon"
                    width={35}
                    height={35}
                    priority
                    className={styles.iconGallery}
                />
                </div>
                <div className={styles.photoGallery}>
                    <Image
                        src="/uploudIcon.svg"
                        alt="Beekeeper icon"
                        width={35}
                        height={35}
                        priority
                        className={styles.iconGallery}
                    />
                </div>                
                <div className={styles.photoGallery}>
                    <Image
                        src="/uploudIcon.svg"
                        alt="Beekeeper icon"
                        width={35}
                        height={35}
                        priority
                        className={styles.iconGallery}
                    />
                </div>

                <Image
                    src="/arrowRight.svg"
                    alt="Beekeeper icon"
                    width={35}
                    height={35}
                    priority
                    className={styles.arrowGallery}
                />
            </div>
        </div>
        <Image
            src="/confirmProfile.svg"
            alt="Beekeeper icon"
            width={70}
            height={70}
            priority
            className={styles.confirmProfile}
        />
    </main>
  );
}
