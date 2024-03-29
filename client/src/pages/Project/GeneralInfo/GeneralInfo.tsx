import classes from './GeneralInfo.module.scss'
import { ImageCarousel } from '../ImageCarousel/ImageCarousel'
import { InfoCard, InfoCardProps } from './InfoCard'

interface Props extends InfoCardProps {
	images: string[];
}

export const GeneralInfo = (props: Props) => {
	return (
		<section>
			<div className={classes.GeneralInfo_Wrapper}>
				<div className={classes.GeneralInfo_Images}>
					<ImageCarousel images={props.images} />
				</div>
				<InfoCard
					title={props.title}
					generalArea={props.generalArea}
					timeToCreate={props.timeToCreate}
					projectPrice={props.projectPrice}
				/>
			</div>
			<p className={classes.GeneralInfo_Text}>
				Приобретая проект дома в Архитектурном бюро, вы получаете комплект чертежей - 2 экземпляра, необходимый для
				проведения строительных работ и беспрепятственного получения разрешения на строительство.
			</p>
		</section>
	)
}

export default GeneralInfo
