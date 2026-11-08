// @ts-check
import { defineConfig } from 'astro/config';

const repository = process.env.GITHUB_REPOSITORY;
const [owner, repo] = repository?.split('/') ?? [];
const isUserOrOrgSite = owner && repo === `${owner}.github.io`;

// https://astro.build/config
export default defineConfig({
	site: owner ? `https://${owner}.github.io` : undefined,
	base: isUserOrOrgSite ? '/' : `/${repo ?? 'bloomingmagicalvillas'}/`,
});
