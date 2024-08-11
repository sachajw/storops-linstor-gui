import React from 'react';
import { useTranslation } from 'react-i18next';

import PageBasic from '@app/components/PageBasic';

import { List } from '@app/features/resourceDefinition/components/List';

const ResourceDefinitionList = () => {
  const { t } = useTranslation(['resource_definition', 'common']);

  return (
    <PageBasic title={t('list')}>
      <List />
    </PageBasic>
  );
};

export default ResourceDefinitionList;