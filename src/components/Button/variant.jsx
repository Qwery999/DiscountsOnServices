import Button from '@/components/Button/Button'

export default () => {
  return (
    <>
        <div>
            <Button
              label='Learn more'
            />
        </div>
        <div>
            <Button
              label='Log in'
              mode='blue-small'
            />
        </div>
        <div>
            <Button
              label='Support'
              mode='black'
            />
        </div>
        <div>
            <Button
              label='Start using'
              mode='start-using'
            />
        </div>
        <div>
            <Button
              label='Request'
              mode='request'
            />
        </div>
        <div>
            <Button
              label='WhatsApp'
              mode='icon'
              href
              isLabelHidden
              iconName='whatsapp'
              hasFillIcon
            />
        </div>
        <div>
            <Button
              label='Copy'
              mode='copy'
              isLabelHidden
              iconName='copy'
              hasFillIcon
            />
        </div>
        <div>
            <Button
              label='DISCOUNTS ON SERVICES'
              mode='link'
              href
            />
        </div>
        <div>
            <Button
              label='Sign in with Google'
              mode='sign-in-with'
              isLabelHidden
              imgSrc='/src/assets/images/button/google.png'
            />
        </div>
        <div>
            <Button
              label='My profile'
              mode='profile'
            />
        </div>
        <div>
            <Button
              label='Change plan'
              mode='change-plan'
            />
        </div>
        <div>
            <Button
              label='Cancel'
              mode='cancel'
            />
        </div>
        <div>
            <Button
              label='Resent code'
              mode='resent-code'
            />
        </div>
        <div>
            <Button
              label='cross'
              mode='cross'
              isLabelHidden
              iconName='cross'
              hasFillIcon
            />
        </div>
    </>
  )
}


