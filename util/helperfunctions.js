

export const orderBy = (elements, direction) => {
    if (direction === 'asc') {
        return [...elements].sort( (a, b) => (a.name > b.name ? 1 : -1))
    }

    if (direction === 'desc') {
        return [...elements].sort( (a, b) => (a.name > b.name ? -1 : 1))
    }

    return elements
}

