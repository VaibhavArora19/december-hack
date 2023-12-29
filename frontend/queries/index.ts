import { gql } from "urql";

export const streamSendQuery = gql`
  query streamSendQuery($sender: ID, $receiver: ID) {
    streams(
      where: {
        and: [
          { sender: $sender }
          { receiver: "0xf1d0df4bbaaa0b70abbbe672f6c30ff8b1de2541" }
        ]
      }
    ) {
      token {
        id
        name
        symbol
      }
      sender {
        id
      }
      currentFlowRate
      receiver {
        id
        accountTokenSnapshots {
          totalAmountStreamedInUntilUpdatedAt
        }
      }
      createdAtTimestamp
    }
  }
`;
