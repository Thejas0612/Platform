const DEFAULT = {
    VITE_HIGHLIGHT_MSOL_COMPONENTS: false
}

export const environment = {
    ...DEFAULT,
    ...import.meta.env
}