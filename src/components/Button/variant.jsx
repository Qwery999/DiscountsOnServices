import Button from '@/components/Button/Button'

export default () => {
  return (
    <>
      <Button
        label = "Подробнее"
      />
      <Button
        mode='fill'
        label = "Отправить"
      />
      <Button
        mode='icon'
        label = "Searh"
        isLabelHidden
        iconName="search"
      />
      <Button
        mode='has-text-arrow'
        label = "Исследовать"
        iconName="text_arrow"
        hasFillIcon
      />
      <Button
        mode='has-text-arrow-black'
        label = "Читать далее"
        iconName="text_arrow"
        hasFillIcon
      />
      <Button
        mode='next'
        label='Next'
        isLabelHidden
        iconName='next__arrow'
        hasFillIcon
      />
      <Button
        mode='prev'
        label='Prev'
        isLabelHidden
        iconName='next__arrow'
        hasFillIcon
      />
      <Button
        mode='soc1als'
        href='/'
        target="_blank"
        label='Youtube'
        isLabelHidden
        iconName='youtube'
        hasFillIcon
      />
    </>
  )
}


