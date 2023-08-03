//linking, identifying, non-repudiation, detecting, data disclosure of information, unawareness, on-compliance

/*
Each LINDDUN GO card illustrates a single common threat type and is designed to guide you through the threat identification process.

Card template:

privacy threat type: name of the privacy threat
hotspot: indication of where the threat may occur in your system model (in- or outbound user/data/flows, processes, storage and retrieval actions)
threat source: indication of where the source may be (organizational, external)
elicitation questions: one or more questions to help you determine if the threat is applicable info to investigate potential threat: some examples and consequences of the threat
*/

var cards_deck = {
  en: [
    {
      category: "linking",
      cards: [
        {
          id: "L1",
          name: "LINKED USER DATA",
          hotspot: "INBOUND USER WITH PERSONAL DATA",
          source: "ORGANIZATIONAL EXTERNAL",
          short_description:
            "The requests from a user to the system are linked through identiﬁers.",
          questions: [
            "Is there an identiﬁer (unique within the system or session) or dataset?",
            "Is there other data associated with that identiﬁer?",
            "Is there previous data with the same identiﬁer to which new data can be linked?",
          ],
          tips: [
            "Sentiment analysis can be applied to faces in pictures to derive the emotional state by performing comparative analysis of one user against others.",
            "Shopping recommendations sent to consumers are based on the degree of similarity to other consumers.",
          ],
          alert:
            "When users are distinguishable from one another, user proﬁles can be constructed to gather increasing amounts of personal data linked to this proﬁle. This can later lead to 'Identifying' threats.",
          info: "Even data without clear attributes could contain patterns to allow distinguishing between different individuals.",
        },
        {
          id: "",
          name: "",
          hotspot: "",
          source: "",
          short_description: "",
          questions: ["", "", ""],
          tips: ["", ""],
          alert: "",
          info: "",
        }        
      ],
      bg_color_title : "#006",
      bg_color_tips : "#006",
      bg_color_alert : "#006",
      bg_color_info : "#006"
    },
  ],
};
