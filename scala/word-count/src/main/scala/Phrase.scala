/**
 * Class to count words in a phrase
 */
class Phrase(phrase: String) {

  def wordCount = phrase
    .split("[^\\w']+")
    .groupBy(_.toLowerCase)
    .mapValues(_.length)

}
