/**
 * Class to count words in a phrase
 */
class Phrase(phrase: String) {

  private val WordRegex = "[\\w']+".r

  def wordCount = {
    WordRegex
      .findAllIn(phrase.toLowerCase)
      .toList
      .groupBy(identity)
      .mapValues(_.length)
  }

}
