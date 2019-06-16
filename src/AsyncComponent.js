import React, { Component } from "react";
import queryString from 'query-string';

import locale from './locale';
const LOCALES = ['en', 'fr'];

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      window.addEventListener("routeChange", () => {
        this.renderLocalized();
      });

      this.state = {
        component: null
      };
    }

    renderLocalized = async() => {
      const { locale: activeLocale, clientSide } = queryString.parse(window.location.search);

      const sanitizedLocale = LOCALES.includes(activeLocale) ? activeLocale: 'fr';
      if (sanitizedLocale !== activeLocale) {
        console.warn(`invalid locale ${activeLocale} please try ${LOCALES}`);
      }
      const translations = await locale[sanitizedLocale]();

      const C = this.state.component;
      this.setState({
        App: C ? <C activeLocale={activeLocale} clientSide={clientSide!=='false'} translations={translations} {...this.props } /> : null
      });
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component
      });
      this.renderLocalized();
    }

    render() {
      return (
        <div>
          {this.state.App}
        </div>
      );
    }
  }

  return AsyncComponent;
}
