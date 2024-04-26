const DEFAULT = {
    VITE_HIGHLIGHT_MSOL_COMPONENTS: false,
    VITE_API_URL: "https://webapp-z-autosol-msolst-n-001.azurewebsites.net"
}

export const environment = {
    ...DEFAULT,
    ...import.meta.env
}