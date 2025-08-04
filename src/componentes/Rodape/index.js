
import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            {/* <li>
                <a href="facebook.com/cesartomm" target="_blank">
                    <img src="/imagens/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/twitter.png" alt="" />
                </a>
            </li> */}
            <li>
                <a href="https://www.instagram.com/cesar_tomm" target="_blank" rel="noreferrer">
                    <img src="/imagens/instagram.png" alt="" />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Alura e César Tomm.
        </p>
       </section>
    </footer>)
}

export default Rodape