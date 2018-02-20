function decypherPhrase (rules, string) {
    const reverted = {}
    for (let key of Object.keys(rules)) {
      reverted[rules[key]] = key
    }
    return cypherPhrase(reverted, string)
  }  