import React from 'react'
import BlockTran from '../../UI/BlockTran'
import './About.scss'

const About = () => {
  return (
    <section className="About">
      <div className="Container">
        <div className="About-Inner">
          <BlockTran>
            <div className="About-Content">
              <h1 className="About-Title">О себе</h1>
              <div className="About-Text">
                <p>
                  Мне 21 год я студент 3 курса университета НТУ "Днепровская политехника" учусь на 121 специальности "Инженерия программного обеспечения". Окончил курс по верстки сайтов от автора Вадима Прокопчук "Верстка от 0 до 1" (Markup developer). На данный момент самостоятельно занимаюсь изучением FRONT-END технологий для улучшения своих навыков в сфере IT. В процессе изучения выполнял несколько заказов на фрилансе на верстку сайтов - заказы выполнял успешно. Подрабатываю на данный момент в веб-студии верстальщиком уже почти 6 месяцев. Имеется небольшой опыт в коммерческой разработке. Мои положительные качества коммуникабельный, терпеливый, способный на обучение , пунктуальный, ответственный, исполнительный.
                </p>
              </div>
              <h3 className="About-TitleSmall">Технологии с какими я знаком</h3>
                <ul className="About-List">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript</li>
                  <li>React</li>
                  <li>Jquery</li>
                  <li>Gulp</li>
                  <li>Git</li>
                  <li>SVG</li>
                  <li>SCSS/SASS</li>
                  <li>Figma</li>
                  <li>Photoshop</li>
                  <li>Chrome/Firefox devTools</li>
                  <li>Photoshop</li>
                </ul>
            </div>
          </BlockTran>

        </div>
      </div>
    </section>
  )
}

export default About