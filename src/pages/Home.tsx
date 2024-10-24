import { FC } from "react"
import { t } from "i18next"

const HomePage: FC = () => {
  return (
    <section className="text-center">
      <h1 className="text-sm mt-20">{t('welcome')}</h1>
      <p className="mb-4">{t('raynSystem')}</p>
    </section>
  )
}


export default HomePage