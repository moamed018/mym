/* eslint-disable no-unused-vars */
import { team } from "./TeamData";
import { LanguageContext } from "../../containers/Languages";
import email from '../../assets/Our Team/icons/baseline-email.svg';
import facebook from '../../assets/Our Team/icons/baseline-facebook.svg';
import linkedin from '../../assets/Our Team/icons/linkedin.svg'
import github from '../../assets/Our Team/icons/github-filled.svg'
import behance from '../../assets/Our Team/icons/behance.svg'

const TeamBox = ({styles,cat}) => {
    const icons=[email,facebook,linkedin,github,behance];
    const teams=team.map(t=>{
        let innerBox=
            <div key={t.id} className="col-12 col-sm-6 col-md-4 col-lg-3 pb-5">
                <div className={`${styles.box} pb-5 position-relative`}>

                    <img className="img-fluid pb-5" src={t.profilePicture} alt={
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage == "en" ? t.name: t.name_ar}
                            </LanguageContext.Consumer>
                        } />
                        
                    <div className={`${styles.text} card bg-white position-absolute start-50 translate-middle-x px-2 py-3`}>

                        <p className="fw-medium fs-5">{
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage == "en" ? t.name: t.name_ar}
                            </LanguageContext.Consumer>
                        }</p>

                        <span className={`${styles.grey} mb-3`}>{
                            <LanguageContext.Consumer>
                                {(lang)=>lang.userLanguage == "en" ? t.title: t.title_ar}
                            </LanguageContext.Consumer>
                        }</span>

                        <div className={`${styles.icons} d-flex align-items-center justify-content-center gap-3`}>
                            {[t.email,t.facebook,t.linkedin,t.github,t.behance].map((link,index)=>{
                                if(link!=null && link!=""){
                                    return(
                                        <a href={link} target="blank" key={Date.now().toString(36) + Math.random().toString(36).substr(2)} 
                                        className={`${styles.icon}`}
                                        role="button">
                                            <img className="img-fluid" src={icons[index]} alt="" />
                                        </a>
                                    )
                                }
                            })}
                        </div>

                    </div>

                </div>
            </div>
            if(t.section==cat){
                return innerBox;
            }else if(cat=="all"){
                return innerBox;
            }
    })
    return (
        <>
        {teams}
        </>
    )
}

export default TeamBox;