import 'styled-components';

declare module 'styled-components' {
  export interface SharedTheme {
    background?: {
      image: string;
      position?: string;
    };

    blade: {
      background: string;
      blur: string;
    };
    navbar: {
      height: string;
    };
    zindex: {
      navbar: number;
      sidemenu: number;
      navSidemenu: number;
      modals: number;
      onboardModal: number;
      alerts: number;
    };
    devices: Devices;
    globalFont: string;
    globalMaxWidth: string;
    globalRadius: string;

    sideBar: {
      width: string;
      collapsedWidth: string;
      animation: string;
    };
    tabbar: {
      height: string;
    };

    alerts: {
      default: {
        background: string;
        color: string;
      };
      info: {
        background: string;
        color: string;
      };
      success: {
        background: string;
        color: string;
      };
      error: {
        background: string;
        color: string;
      };
    };

    txModal: {
      width: string;
      gap: string;
    };

    searchList: {
      primary: string;
      primaryVariant: string;
      primaryHover: string;
      onPrimary: string;
    };

    layoutPadding: string;
    card: {
      padding: string;
    };
  }

  // TODO Restructure theme and generic vars shared between themes
  export interface DefaultTheme extends SharedTheme {
    colors: {
      logo: string;

      primary: string;
      background: string;
      surface: string;

      primaryVariant: string;

      secondary: string;
      secondaryVariantA: string;
      secondaryVariantB: string;

      surfaceVariantA: string;
      surfaceVariantB: string;

      selectionBar: string;

      onPrimaryVariant: string;
      onBackground: string;

      onSurfaceH1: string;
      onSurfaceH1Contrast: string;
      onSurfaceH2: string;
      onSurfaceH2Hover: string;
      onSurfaceSH1: string;
      onSurfaceSH1Hover: string;

      upTrend: string;
      downTrend: string;

      vaultActionButton: {
        background: string;
        borderColor: string;
        color: string;
        disabledContrast: string;

        selected: {
          background: string;
          borderColor: string;
          color: string;
        };
      };

      walletButton: {
        background: string;
        color: string;
      };

      txModalColors: {
        background: string;
        backgroundVariant: string;
        onBackgroundVariant: string;
        onBackgroundVariantB: string;
        onBackgroundVariantColor: string;
        primary: string;
        loading: string;
        error: string;
        warning: string;
        success: string;
        text: string;
        textContrast: string;
      };
    };
  }

  export interface Devices {
    mobile: number;
    tablet: number;
    tabletL: number;
    desktopS: number;
    desktop: number;
    desktopL: number;
  }
}
