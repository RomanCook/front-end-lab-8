function cypherPhrase (rules, string) {
    let result = ''
    for (let i = 0; i < string.length; i++) {
      result += rules[string[i]] || string[i]
    }
    return result
  }