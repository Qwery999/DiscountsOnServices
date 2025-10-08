import OverlayMenu from '@/modules/OverlayMenu'
import Accordion from '@/modules/Accordion'
import Tabs from '@/modules/Tabs'
import ModalManager from '@/modules/ModalManager'
import ShowPassword from '@/modules/ShowPassword'
import AccountTabs from '@/modules/AccountTabs'
import Account from '@/modules/Account'
import I18n from '@/modules/i18n'
const i18n = new I18n({
  supported: ['en', 'ua'],
  path: `${import.meta.env.BASE_URL}locales`
});

i18n.load();
i18n.initLanguageButtons();

new OverlayMenu()
new Accordion()
new Tabs()
new ModalManager()
new ShowPassword()
new AccountTabs ()
new Account()

