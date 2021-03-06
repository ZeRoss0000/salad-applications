import { observer } from 'mobx-react'
import React from 'react'
import { getStore } from '../../Store'
import { LoginPanelContainer } from './LoginPanelContainer'

interface Props {}

export const withLogin = <P extends object>(Component: React.ComponentType<P>, DefaultComponent?: any) => {
  @observer
  class WithLogin extends React.Component<P & Props> {
    render() {
      const store = getStore()
      const { ...props } = this.props
      return store.auth.isAuthenticated ? (
        <Component {...(props as P)} />
      ) : DefaultComponent ? (
        <DefaultComponent />
      ) : (
        <LoginPanelContainer />
      )
    }
  }
  return WithLogin
}
