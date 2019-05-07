export default function search(state = { text: '', tags: [] }, action) {
    switch (action.type) {
        case 'SEARCH_TODO': {
            return {
                text: action.searchText,
                tags: action.searchTags
            }
        }

        default: return state;
    }
}