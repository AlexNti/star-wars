import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { People } from "src/features/wikiList/types";

type PersonTableProps = {
  people: People[];
  handleSelectPerson: (personId: string) => void;
};

const PesonKeys = ["name"];

const WikiPeopleTable = ({
  people,
  handleSelectPerson,
}: PersonTableProps): JSX.Element => {
  return (
    <Table size="md">
      <Thead>
        <Tr>
          {PesonKeys.map((personKey) => (
            <Th key={personKey} color="gray.400">
              {personKey}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {people.map((person) => (
          <Tr onClick={() => handleSelectPerson(person.id)} key={person.id}>
            <Td>{person.name}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default WikiPeopleTable;
