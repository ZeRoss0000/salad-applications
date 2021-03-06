import { connect } from '../../connect'
import { RootStore } from '../../Store'
import { NetworkErrorPage } from './components/NetworkErrorPage'

const mapStoreToProps = (store: RootStore): any => ({
  onCloseClicked: () => store.ui.hideModal(),
})

export const NetworkErrorContainer = connect(mapStoreToProps, NetworkErrorPage)
