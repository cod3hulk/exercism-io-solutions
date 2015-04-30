/**
 * Class to count words in a phrase
 */
class Phrase(phrase: String) {

  def wordCount = {
    phrase
      .toLowerCase
      .split("[\\s.:!,&@$%^&]")
      .filter(!_.isEmpty)
      .groupBy(identity)
      .mapValues(_.length)
  }

}
