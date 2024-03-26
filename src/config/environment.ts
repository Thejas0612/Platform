const DEFAULT = {
    VITE_OUTLINE_MSOL_COMPONENTS: false
}

export const environment = {
    ...DEFAULT,
    ...import.meta.env
}