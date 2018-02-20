function collectIds (movies) {
    return getTransformedArray(getFilteredArray(movies, function (movie) {
      return movie.rating > 3.0
    }), function (movie) {
      return movie.id
    })
  }