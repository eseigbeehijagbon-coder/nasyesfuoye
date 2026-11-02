export const DEPARTMENT_PROFILE_URL = 'https://fuoye.edu.ng/rt-department/department-of-system-engineering/';

export const LEVELS = [
   { code: '100', label: '100L', name: '100 Level', href: '/100-level' },
   { code: '200', label: '200L', name: '200 Level', href: '/200-level' },
   { code: '300', label: '300L', name: '300 Level', href: '/300-level' },
   { code: '400', label: '400L', name: '400 Level', href: '/400-level' },
   { code: '500', label: '500L', name: '500 Level', href: '/500-level' },
];

export const PROGRAMME_AREAS = [
   'Systems modelling',
   'Operations research',
   'Decision analysis',
   'Control systems',
   'Project management',
   'Systems simulation',
];

export function getLevelByCode(code) {
   return LEVELS.find((level) => level.code === code);
}
