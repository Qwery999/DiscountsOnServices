import './Help.scss'
import Section from '@/layouts/Section'
import FaqDetails from '@/components/FaqDetails/FaqDetails'
import Button from '@/components/Button'

export default () => {
  const accordion = [
    {
      question:'The set time has passed, but the invoice has not yet arrived, what should I do?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad delectus deserunt dolorem eaque earum magni ratione rem temporibus vitae!',
    },
    {
      question:'Can I change my Netflix account email and password after purchase?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis eum, illum mollitia nesciunt placeat quibusdam quod. Cupiditate debitis dolor ducimus error facere itaque magni neque non odio quibusdam quo quos recusandae reprehenderit, saepe sit soluta unde velit vitae voluptate voluptatem. Architecto at cupiditate, deleniti eligendi enim necessitatibus quia soluta!',
    },
    {
      question:'Can I add a phone number for password recovery?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci asperiores commodi dicta distinctio ducimus exercitationem facilis fuga iste laboriosam mollitia possimus quis ratione totam, vel. Ex id ipsam rem.',
    },
    {
      question:'How soon will I receive the account information I ordered?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam architecto blanditiis deserunt dolore dolorum eos ex facere fuga, illo illum iure iusto minima molestias natus necessitatibus nemo nihil nulla obcaecati perferendis, praesentium quae quos rerum saepe sunt suscipit totam veritatis?',
    },
    {
      question:'How to pay?',
      answer:'Payment options we currently have: PayPal, Bitcoin.',
      open: true
    },
    {
      question:'The set time has passed, but the invoice has not yet arrived, what should I do?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad delectus deserunt dolorem eaque earum magni ratione rem temporibus vitae!',
    },
    {
      question:'Can I change my Netflix account email and password after purchase?',
      answer:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut debitis eum, illum mollitia nesciunt placeat quibusdam quod. Cupiditate debitis dolor ducimus error facere itaque magni neque non odio quibusdam quo quos recusandae reprehenderit, saepe sit soluta unde velit vitae voluptate voluptatem. Architecto at cupiditate, deleniti eligendi enim necessitatibus quia soluta!',
    },
  ]

  return (
    <Section
      className='help'
      title='How can we help you?'
      titleId='help'
    >
      <div className="help__inner">
        <div className="help__accordion" data-js-accordion="">
          {accordion.map((elem, index) => (
            <FaqDetails {...elem} key={index}/>
          ))}
        </div>
        <Button
          label="Support"
          mode="black"
          href='mailto:discountsonservices.support@gmail'
        />
      </div>
    </Section>
  )
}