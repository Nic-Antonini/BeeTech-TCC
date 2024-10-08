import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Sidebar from '../components/sidebar/page'
import Farmer from '../../../farmer/editProfile/page'
import Beekeeper from '../../../beekeeper/editProfile/page'

export default function editProfile(){
    return(
        <div className={styles.allPage}>
            <div className={styles.secondDiv}>
                <Sidebar />
                <Beekeeper name='Nome do agricultor' description='Informações sobre o agricultor...'
                nameFarm='Nome da propriedade' hectares={10}/>
            </div>
        </div>
    )
}