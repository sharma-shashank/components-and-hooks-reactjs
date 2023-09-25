# Components and hooks Reactjs
  1. Stale-while-refresh hook
  2. AbortController hook
  3. useFetch hook
  4. Infinite scroll component
  5. Crousal component logic
  6. Facebook comments basic logic

# Nested comments logic and data structure
  -component to render nested comments, like and reply functionality using recursion

# Coustom Hook for caching in react using Stale-While-Refresh method
  - Call API and cache data
  - While data is cached return the cached data and hit a request to fetch the next data asynchronously and update the cache in the background
  - Once new feeds or data are in the cache ask the user to reload 
  - This method fetches data in the background and updates the cache in parallel

# AbortController Hook
  - Hook to abort unnecessary API calls by passing abort signal in api call

# Crousal
  - Logic for react carousel component for image view
    
# UseFetch hook
  - useFetch generic hook for calling APIs
  - uses pagination, error handling, and data load indication for infinite list

# Infinite scroll component
  - Component to enable the feature of infinite scrolling
  - calls scroll event for API calls to fetch new data on scroll

    
In the project directory, you can run:

### `npm start`
