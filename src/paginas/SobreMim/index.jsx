import styles from "./SobreMim.module.css";
import PostModelo from "../../componentes/PostModelo";
import fotoCapa from "../../assets/sobre_mim_capa.png";
import fotoSobreMim from "../../assets/sobre_mim_foto.png";

export default function SobreMim() {
	return (
		<PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
			<h3 className={styles.subtitulo}>Olá eu sou o Rafael</h3>

			<img
				src={fotoSobreMim}
				alt="Foto sorrindo"
				className={styles.fotoSobreMim}
			/>

			<p className={styles.paragrafo}>
                Me chamo Rafael Ferreira da Silva, mais conhecido como Zipão. Trabalho como guia de turismo desde 2014.
            </p>
			<p className={styles.paragrafo}>
                Me formei como guia pela ETEC Carlos de Campos e através da agência que realizava as viagens técnicas do curso, tive a minha primeira oportunidade de trabalhar com turismo pedagógico.
            </p>
			<p className={styles.paragrafo}>
                Desde então, venho me atualizando na área, realizando cursos sobre educação, mediação e também técnicas de oratória, interação e primeiros-socorros.
            </p>
			<p className={styles.paragrafo}>
                Realizei diversas formações ao longo da minha carreira como guia de turismo e fui me adentrando cada vez mais no eixo de hospitalidade e lazer, atuando na área de lazer em hotéis, produção de eventos, atividades como bartender, entre outras atividades.
            </p>
			<p className={styles.paragrafo}>
                Devido a minha formação em Gestão Ambiental e a paixão por atividades outdoor, tive as primeiras oportunidades de trabalhar com ecoturismo e venho me especializando cada vez mais nesta vertente do turismo.
            </p>
			<p className={styles.paragrafo}>
                Pode até parecer muito ambicioso mas em breve estarei com novos projetos em andamento, e assim que possível, venho mostrar para vocês quais são!
            </p>
		</PostModelo>
	);
}
