const DEFAULT = {
    VITE_HIGHLIGHT_MSOL_COMPONENTS: false,
    VITE_API_URL: "https://webapp-z-autosol-msolst-ui-n-001.azurewebsites.net",
    UOM_API_URL: "https://app-z-autosol-fpa-backend-n-001.azurewebsites.net"
}

export const environment = {
    ...DEFAULT,
    ...import.meta.env
}